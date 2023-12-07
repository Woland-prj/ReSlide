function saveTextToFile(saveText: string, nameText: string) {
  // file setting
  const text = saveText
  const name = nameText
  const type = 'text/plain'

  // create file
  const a = document.createElement('a')
  const file = new Blob([text], { type: type })
  a.href = URL.createObjectURL(file)
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
}

function saveJsonObjToFile(saveObj: object, nameDoc: string) {
  // file setting
  const text = JSON.stringify(saveObj)
  const name = nameDoc
  const type = 'text/plain'

  // create file
  const a = document.createElement('a')
  const file = new Blob([text], { type: type })
  a.href = URL.createObjectURL(file)
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
}
