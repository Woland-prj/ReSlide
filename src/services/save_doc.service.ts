const saveJsonObjToFile = (saveObj: object, nameDoc: string) => {
  // file setting
  const text = JSON.stringify(saveObj)
  const name = nameDoc
  const type: string = 'application/json'

  // create file
  const a: HTMLAnchorElement = document.createElement('a')
  const file: Blob = new Blob([text], { type: type })
  a.href = URL.createObjectURL(file)
  a.download = name
  document.body.appendChild(a)
  a.click()
  a.remove()
}

export { saveJsonObjToFile }
