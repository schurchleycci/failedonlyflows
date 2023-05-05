import logo from './logo.svg';
import './App.css';
import styled from './styled.ts';
import {Link} from 'react-router-dom';
import { ReactComponent as Arrow } from './Arrow.svg';

const Container = styled.div(
    ({ theme }) => `
    padding: 24px;
    height: 100%;
    width: 592px;
    background: #F7F7F7;
    border: 1px solid #dddddd;
    border-radius: 8px;
    min-width: 466px;
  
  
    
  `,
  );

function StartPage() {

    return (
      <div className='App'>
       <Container>
       <Link style={{width: '32px', color: '#161616', fontWeight: '700', textDecoration: 'none'}} to="/language1">
        <div className='selectButton'>Test runner only</div>
       </Link>
       <Link style={{width: '32px', color: '#161616', fontWeight: '700', textDecoration: 'none'}} to="/language2">
        <div className='selectButton'>Test runner with CLI/script</div>
       </Link>
       <Link style={{width: '32px', color: '#161616', fontWeight: '700', textDecoration: 'none'}} to="/language3">
        <div className='selectButton'>Test runner and pkg manager</div>
       </Link>
       <Link style={{width: '32px', color: '#161616', fontWeight: '700', textDecoration: 'none'}} to="/language4">
        <div className='selectButton'>Test runner then CLI/script</div>
       </Link>
       </Container>
            
          
 
        
         
      </div>
    );
  }
  
  
  
  export default StartPage;