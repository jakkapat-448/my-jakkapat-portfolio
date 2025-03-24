// components/About.jsx
import React, { useEffect, useState } from "react";

const programmingLanguages = [
  { name: "HTML/CSS", level: 70, years: 3 },
  { name: "JavaScript", level: 45, years: 2 },
  { name: "C#", level: 30, years: 1 },
  { name: "Python", level: 60, years: 2 },
];

const toolsAndTechnologies = [
  { name: "React", level: 40, years: 1 },
  { name: "Node.js", level: 20, years: 1 },
  { name: "Unity", level: 60, years: 2 },
  { name: "Firebase", level: 20, years: 1 },
  { name: "Git", level: 65, years: 2 },
];

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 500);
  }, []);

  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="profile-section">
        <img src="/res/my_PFP.jpg" alt="my pfp" className="profile-pic" />
        <div className="profile-text">
          <h3>สวัสดีครับ</h3>
          <h3 className="myName">บอส จักรพรรดิ หงษ์ชากรณ์</h3>
          <p>
          ผมสนใจเรื่องเทคโนโลยีตั้งแต่ช่วงมัธยมปลาย แต่ไม่ได้ทุ่มเทศึกษามันแบบจริงจังตลอดเวลา 
          เพราะผมเป็นคนที่ burnout ได้ง่าย เลยเลือกเรียนรู้จากการลองทำโปรเจคมากกว่า
          </p>
          <p>
          ผมไม่ได้มองว่าตัวเองเก่งอะไรเป็นพิเศษ แต่ผมเป็นคนที่ถ้ามีอะไรที่จำเป็นต้องทำหรืออยากรู้ 
          ผมจะศึกษามันจนเข้าใจ ผมสนุกกับการเขียนโค้ดและแก้ปัญหา ชอบความปวดหัวของงานสายนี้ และชอบช่วงเวลาที่โปรเจคของเราสำเร็จออกมาเป็นสิ่งที่จับต้องได้
          </p>
          <p>
          ผมเคยทำหลายอย่าง ตั้งแต่พัฒนา เว็บไซต์ยินดีการจบการศึกษาของเพื่อนๆ ด้วย HTML, CSS และ JavaScript ไปจนถึงลองทำ 
          เกม 2D บน Unity ด้วย C# และล่าสุดก็ได้สร้าง Discord Bot ด้วย Python สำหรับเซิร์ฟเวอร์ของตัวเอง จริงๆก็มีอีกหลายอย่าง
          แต่ไม่ได้เก็บไว้เพราะตอนนั้นผมยังไม่รู้จัก Github
          </p>
          <p>
          ผมชอบทำงานคนเดียว แต่ผมเข้าใจว่าสายงานไอทีต้องการทีมเวิร์กและการสื่อสาร เมื่อผมมีหน้าที่ต้องทำ ผมจะทำสุดความสามารถ
          และเมื่อต้องเรียนรู้อะไร ผมจะใช้เวลากับมันจนกว่าจะเข้าใจ
          </p>  
          <p>ผมยังไม่แน่ใจว่างานอดิเรกของผมคืออะไร เพราะผมไม่ใช่คนที่เล่นเกมตลอดเวลา ไม่ชอบกีฬาเป็นทีม และไม่มีเซนส์ด้านดนตรี แต่สิ่งที่ผมรู้คือ 
            ผมอยากสร้างบางอย่างที่มีความหมาย และถ้ามันเป็นไปได้ ผมอยากทำสิ่งนั้นในแบบของตัวเอง
          </p>
        </div>
      </div>

      <h3>Programming Languages</h3>
      <div className="skills-container">
        {programmingLanguages.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-years">{skill.years} years</span>
            </div>
            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{
                  width: animate ? `${skill.level}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <h3>Tools & Technologies</h3>
      <div className="skills-container">
        {toolsAndTechnologies.map((skill) => (
          <div key={skill.name} className="skill-item">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-years">{skill.years} years</span>
            </div>
            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{
                  width: animate ? `${skill.level}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
