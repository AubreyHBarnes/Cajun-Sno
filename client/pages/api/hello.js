// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import axios from "axios"


  const API = "/snoballs"


  const register = async () => {
    const res = await axios.get(API)

    if (res.data) {
      // localStorage.setItem('snoballs', JSON.stringify(res.data))
      console.log(res.data)
    } else {
      console.log('fail')
    }

    return res.data
  }

  export default register