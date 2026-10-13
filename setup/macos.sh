#!/usr/bin/env bash
# Sets up a Mac (Apple Silicon or Intel) for Speaking Genie video editing with Claude Code.
#
#   setup/macos.sh            install tools, brand fonts, motion graphics deps
#   setup/macos.sh --models   also download the Whisper model for captions (~1.6 GB)
#
# Safe to re-run: every step skips what is already installed.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WITH_MODELS=0
[[ "${1:-}" == "--models" ]] && WITH_MODELS=1

say() { printf "\n\033[1;35m▸ %s\033[0m\n" "$*"; }

if [[ "$(uname)" != "Darwin" ]]; then
  echo "This script is for macOS. On Linux install ffmpeg, node 20+, python 3.10+ and whisper.cpp yourself."
  exit 1
fi

say "Xcode command line tools"
xcode-select -p >/dev/null 2>&1 || { xcode-select --install; echo "Finish the Xcode CLT install, then re-run."; exit 1; }

say "Homebrew"
if ! command -v brew >/dev/null 2>&1; then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi
eval "$(/opt/homebrew/bin/brew shellenv 2>/dev/null || /usr/local/bin/brew shellenv)"

say "Media tools (ffmpeg with VideoToolbox, whisper.cpp with Metal, Node, Python)"
# ffmpeg: H.264/HEVC/ProRes hardware encode via VideoToolbox, libass captions, zimg HDR tone-mapping
# whisper-cpp: speech-to-text on the Apple GPU (Metal) for captions
# mediainfo / exiftool: deep metadata of camera and iPhone files
brew install whisper-cpp node python@3.12 mediainfo exiftool

# Homebrew's core ffmpeg is a slim build without libass (captions) or zimg (HDR tone-mapping),
# so use the homebrew-ffmpeg tap (libass built in, zimg via --with-zimg). Replaces the core formula if present.
if ! ffmpeg -hide_banner -filters 2>/dev/null | grep -q " subtitles "; then
  brew list --formula ffmpeg >/dev/null 2>&1 && brew uninstall --ignore-dependencies ffmpeg
  brew tap homebrew-ffmpeg/ffmpeg
  brew install homebrew-ffmpeg/ffmpeg/ffmpeg --with-zimg   # libass is built in by default
fi

say "Brand fonts → ~/Library/Fonts (so Keynote, Final Cut, DaVinci and Pages see them)"
mkdir -p "$HOME/Library/Fonts"
cp -n "$ROOT"/brand/fonts/*.ttf "$HOME/Library/Fonts/" 2>/dev/null || true

say "Motion graphics (Remotion) dependencies"
(cd "$ROOT/motion" && npm install --no-audit --no-fund)

if [[ $WITH_MODELS == 1 ]]; then
  say "Whisper model (large-v3-turbo, multilingual incl. Arabic)"
  mkdir -p "$ROOT/models"
  MODEL="$ROOT/models/ggml-large-v3-turbo.bin"
  if [[ ! -f "$MODEL" ]]; then
    curl -L --fail -o "$MODEL.part" \
      "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3-turbo.bin"
    mv "$MODEL.part" "$MODEL"
  fi
fi

chmod +x "$ROOT/bin/sgv"

say "Check"
"$ROOT/bin/sgv" doctor || true

cat <<EOF

Done. Next:
  cd "$ROOT"
  claude                      # open Claude Code here; it reads CLAUDE.md
  bin/sgv new "My first video"
Optional: add bin/ to PATH →  echo 'export PATH="$ROOT/bin:\$PATH"' >> ~/.zshrc
EOF
