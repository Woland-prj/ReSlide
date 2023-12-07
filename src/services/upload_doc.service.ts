async function readJSONFile(event: Event) {
  try {
    const reader = new FileReader()
    const target = event.target as HTMLInputElement
    const file = target.files ? target.files[0] : null
    reader.onload = () => {
      const data = reader.result?.toString()
      const jsonData = JSON.parse(data!)
      console.log(jsonData)
    }
    if (file) reader.readAsText(file)
  } catch (err) {
    console.error(err)
  }
}

export { readJSONFile }
