function generateWebsiteFromPrompt(prompt) {
  // ตัวอย่างการ generate HTML จาก prompt
  return `
    <html>
      <body>
        <h1>${prompt}</h1>
      </body>
    </html>
  `;
}

module.exports = { generateWebsiteFromPrompt };
