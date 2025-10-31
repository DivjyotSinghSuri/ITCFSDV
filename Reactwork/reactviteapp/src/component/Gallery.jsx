import React from 'react'
import Profile from './Profile'
import './Gallery.css'

export default function Gallery() {
  const student = [
    {
      pic: "https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg",
      name: "Vansh",
      branch: "IT",
      section: "C",
      college: "ABES Engineering College"
    },
    {
      pic: "https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg",
      name: "Badal",
      branch: "IT",
      section: "C",
      college: "KIET Engineering College"
    },
    {
      pic: "https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg",
      name: "Sher",
      branch: "IT",
      section: "A",
      college: "ABES Engineering College"
    },
    {
      pic: "https://www.flexjobs.com/blog/wp-content/uploads/2022/06/07130847/How-to-Put-Your-Work-Samples-Online.jpg",
      name: "Kullu",
      branch: "IT",
      section: "D",
      college: "ABESIT Engineering College"
    }
  ]

  return (
    <div>
      {
        student.map((ele, index) => (
          <Profile data={ele} key={index} />
        ))
      }
    </div>
  )
}
