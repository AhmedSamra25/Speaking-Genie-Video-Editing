"""One heavy job at a time on this machine.

Renders, motion graphics, screen captures and transcription each take a browser, a GPU encoder or whisper.cpp and
around a gigabyte of memory. When several crew agents or sessions start them together, an 8 GB Mac swaps and every
job slows down. `heavy()` holds a machine-wide lock for the life of the command, so the others wait their turn.
"""

import fcntl
import os
import sys
import time
from contextlib import contextmanager
from pathlib import Path

LOCK = Path(os.environ.get("SGV_LOCK", Path.home() / ".cache" / "sgv" / "render.lock"))


@contextmanager
def heavy(what: str):
    if os.environ.get("SGV_NO_LOCK"):
        yield
        return
    LOCK.parent.mkdir(parents=True, exist_ok=True)
    with open(LOCK, "a+") as f:
        try:
            fcntl.flock(f, fcntl.LOCK_EX | fcntl.LOCK_NB)
        except BlockingIOError:
            f.seek(0)
            holder = f.read().strip() or "another sgv job"
            print(f"  waiting: {holder} is running (one heavy job at a time on this machine)", file=sys.stderr)
            t = time.time()
            fcntl.flock(f, fcntl.LOCK_EX)
            print(f"  waited {time.time() - t:.0f}s", file=sys.stderr)
        f.seek(0)
        f.truncate()
        f.write(f"sgv {what} (pid {os.getpid()}, since {time.strftime('%H:%M:%S')})")
        f.flush()
        try:
            yield
        finally:
            f.seek(0)
            f.truncate()
            fcntl.flock(f, fcntl.LOCK_UN)
