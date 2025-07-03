function copy(text) {
    navigator.clipboard.writeText(text);
    console.log("copied", text, "to keyboard");
  }