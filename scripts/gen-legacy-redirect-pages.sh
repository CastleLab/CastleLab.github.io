#! /usr/bin/env bash

# This script generates redirect pages for all legacy pages.

# abort if PUBLIC_URL is not set
if [[ -z "$PUBLIC_URL" ]]; then
  echo "PUBLIC_URL is not set. Abort generating redirect pages for legacy html."
  exit 0
fi

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

function gen_redirect_page() {
    local legacy_path=$1
    local redirect_path=$2

    CONTENT="<!DOCTYPE html><head><meta http-equiv='Refresh' content=\"0; url='$PUBLIC_URL/#$redirect_path'\" /></head></html>"

    echo "$CONTENT" > "$SCRIPT_DIR/../build/$legacy_path"
}

gen_redirect_page "news.html" "/news"
gen_redirect_page "people.html" "/people"
gen_redirect_page "project.html" "/projects"
gen_redirect_page "publication.html" "/publication"
gen_redirect_page "awards.html" "/awards"
