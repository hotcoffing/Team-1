import { useState } from 'react'
import './App.scss'
import ProfileItem from './components/profileItem.jsx'
import AboutItem from './components/aboutItem.jsx'
import HobbyItem from './components/hobbyItem.jsx'

function App() {
  const profiles = [
    { id: 1, img: "/assets/전화.png", imgText: "전화", text: "010-2350-2813" },
    { id: 2, img: "/assets/이메일.png", imgText: "이메일", text: "skuy369@hansung.ac.kr"},
    { id: 3, img: "/assets/주소.png", imgText: "주소", text: "경기도 의정부시 신곡동" }
  ]

  const abouts = [
    { id: 1, title: "EDUCATION", text: "한성대학교 컴퓨터공학부 \n2022.03 ~ 2028.02" },
    { id: 2, title: "SKILLS", text: "C, Java, Unity" },
    { id: 3, title: "WORK", text: "프론트엔드 개발자" },
    { id: 4, title: "ACTIVITIES", text: "멋쟁이사자처럼 14기" }
  ]

  const hobbys = [
    { id: 1, title: "게임하기", img: "/assets/1.jpg", imgText: "게임하기" },
    { id: 2, title: "농구하기", img: "/assets/2.jpg", imgText: "농구하기" },
    { id: 3, title: "유니티하기", img: "/assets/3.jpg", imgText: "유니티하기" }
  ]

  return (
    <>
      <header>
        <h1>PORTFOLIO.</h1>
        <nav>
          <ul>
            <li>ABOUT</li>
            <li>HOBBY</li>
            <li>CONTACT</li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="intro">
          <h2>
            안녕하세요! <br/>
            제 이름은 김성빈 입니다. <br/>
            배워가는 개발자가 되고 싶어요.
          </h2>
        </section>

        <section className="about">
          <h2 className="aboutTitle">ABOUT</h2>
          <div className="aboutDetail">
            <article className="profile">
              <img src={"/assets/picture.png"} alt="프로필 사진"/>
              <div>
                <p className="name">김성빈</p>
                {profiles.map((profile) => (
                  <ProfileItem 
                    key={profile.id} 
                    img={profile.img} 
                    imgText={profile.imgText} 
                    text={profile.text}
                  />
                ))}
              </div>
            </article>

            <div className="grid">
              {abouts.map((about) => (
                <AboutItem 
                  key={about.id} 
                  title={about.title} 
                  text={about.text}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="hobby">
          <h2 className="sectionTitle">HOBBY</h2>
          <ul>
            {hobbys.map((hobby) => (
              <HobbyItem 
                key={hobby.id} 
                title={hobby.title} 
                img={hobby.img} 
                imgText={hobby.imgText}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default App