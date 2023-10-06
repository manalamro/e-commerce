import './footer.css';
import {AiFillFacebook,AiOutlineInstagram} from 'react-icons/ai'
const Footer =()=>{

return(
    <>
    <div className='Footer'>

    <div className='contactInfo'>
    <div className='title'>Milano Smart Living</div>
    <div className='content'>דיזיין סנטר, רחוב הלח"י 2, בני ברק</div>
    <br/>
    <div className='title'>שעות פעילות:</div>
    <div className='content'>
			א'-ה':
             10:00 עד 21:00 <br/>
            שישי: 9:00 עד 14:00
            </div>
    <br/>
    <div className='title'>טלפון:</div>
    <div className='content'>  1700-700-644</div>
    <br/>
    <div className='title'>פקס:</div>
    <div className='content'>  03-5224242</div>
    <br/>
    <div className='title'>אימייל:</div>
    <div className='content'> info@milanosmartliving.com</div>
    </div>

<div className='socialIcons'>
<a href='/home' style={{marginRight:"30px"}}><AiFillFacebook style={{color:"white"}} /></a>
<a href='/login'><AiOutlineInstagram style={{color:"white"}}/></a>

</div>
    <form  className='emailMessage'>
    <label>שם מלא</label>
     <input type='text' required></input>
     <label>טלפון</label>
     <input type='text' required></input>
     <label>אימייל</label>
     <input type='text' required></input>
     <label>תוכן ההודעה</label>
     <input type='text' required></input>
     <button type="submit"  alt="שלח פנייתך">שלח פנייתך</button>
        </form>

    </div>
    </>
)

}

export default Footer;