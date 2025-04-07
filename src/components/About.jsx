// components/About.jsx
import React from "react";

const programmingLanguages = [
  { 
    name: "HTML/CSS", 
    level: "Intermediate", 
    years: 3,
    description: "สร้างเว็บไซต์ที่สวยงาม responsive และใช้ CSS Flexbox/Grid อย่างมีประสิทธิภาพ"
  },
  { 
    name: "JavaScript", 
    level: "Basic", 
    years: 2,
    description: "พัฒนา interactive web elements, DOM manipulation และใช้ API ต่างๆได้"
  },
  { 
    name: "C#", 
    level: "Basic", 
    years: 1,
    description: "เขียนโค้ดเกมสั้นๆใน Unity, เข้าใจ OOP concepts และ syntax พื้นฐาน"
  },
  { 
    name: "Python", 
    level: "Intermediate", 
    years: 2,
    description: "สร้าง Discord Bots, ประมวลผลข้อมูลเบื้องต้น และเขียน automation scripts"
  },
];

const toolsAndTechnologies = [
  { 
    name: "React", 
    level: "Basic", 
    years: 1,
    description: "สร้าง UI components, ใช้ hooks พื้นฐาน (useState, useEffect) และทำ single page applications"
  },
  { 
    name: "Node.js", 
    level: "Beginner", 
    years: 1,
    description: "สร้าง API endpoints เบื้องต้น และเชื่อมต่อกับฐานข้อมูล"
  },
  { 
    name: "Unity", 
    level: "Intermediate", 
    years: 2,
    description: "พัฒนาเกม 2D, จัดการ physics และ animations เบื้องต้น"
  },
  { 
    name: "Firebase", 
    level: "Beginner", 
    years: 1,
    description: "ใช้ Firestore, Authentication และ Hosting สำหรับโปรเจคขนาดเล็ก"
  },
  { 
    name: "Git", 
    level: "Intermediate", 
    years: 2,
    description: "ใช้ version control พื้นฐาน, branching, pull requests"
  },
];

// แปลงระดับเป็นภาษาไทย
const getLevelInThai = (level) => {
  switch(level) {
    case "Beginner": return "เริ่มต้น";
    case "Basic": return "พื้นฐาน";
    case "Intermediate": return "ปานกลาง";
    case "Advanced": return "ขั้นสูง";
    case "Expert": return "เชี่ยวชาญ";
    default: return level;
  }
};

const About = () => {

  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="profile-section">
      <img src={`${process.env.PUBLIC_URL}/res/my_PFP.jpg`} alt="my pfp" className="profile-pic" />
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
              <span className="skill-level">{getLevelInThai(skill.level)}</span>
            </div>
            <div className="skill-years">
              <span>{skill.years} ปี</span>
            </div>
            <div className="skill-tooltip">
              <p>{skill.description}</p>
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
              <span className="skill-level">{getLevelInThai(skill.level)}</span>
            </div>
            <div className="skill-years">
              <span>{skill.years} ปี</span>
            </div>
            <div className="skill-tooltip">
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;