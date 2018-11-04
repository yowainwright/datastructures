export default function warn (msg: string): void {
  return console.warn(
    '%c ⚠️ DataStructures TS: ',
    'background: blue, color: white',
    msg
  )
}
