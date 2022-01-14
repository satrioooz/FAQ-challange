import React,{useState}  from 'react';
import './App.css';
import Arrow from './images/icon-arrow-down.svg';
import imgWoman from './images/illustration-woman-online-mobile.svg';

const Data = [
  {
    question: 'How many team members can I invite?',
    answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
  },
  {
    question: 'What is the maximum file upload size?',
    answer: 'No more than 2GB. All files in your account must fit your allotted storage space.'
  },
  {
    question: 'How do I reset my password?',
    answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'
  },
  {
    question: 'Can I cancel my subscription?',
    answer: 'Yes! Send us a message and we’ll process your request no questions asked. Do you provide additional support? Chat and email support is available 24/7. Phone lines are open during normal business hours.'
  }
]

  function App() {
    const [selec, setSelec] = useState(null);

    const toggle = (i) =>{
      if(selec == i){
        return setSelec(null)
      }
      setSelec(i)
    }


  return (
    <div className='App'>
      <div className='container'>

        <div className='grid'>
          <div className='banner'>
            <img className='woman' src={imgWoman} alt=''/>
          </div>

          <div className='text'>
            <h1>FAQ</h1>
            {Data.map((item,i)=>(
              <div className='items'>
                <div className='title' onClick={() => toggle(i)}>
                  {item.question}
                  {selec === i ? <img src={Arrow} />: <img style={{transform:'rotate(180deg)'}} src={Arrow}/>}
                  </div>
                   <div className={selec === i ? 'content-show': 'content'}>
                     {item.answer}
                     </div>
                </div>
            ))}
          </div>
        </div>

        
          </div>
          </div>

  )
}

export default App;
