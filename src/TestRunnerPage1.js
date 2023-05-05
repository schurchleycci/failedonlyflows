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

function TestRunnerPage() {

    return (
      <div className='App'>
       <Container><h2>Set up rerun failed tests only</h2>      
       <p>Using <code>circleci tests run</code> gives you access to CircleCI's most powerful testing features, including rerunning failed tests only.</p>
       <h3>Test Runner</h3>
       <div className='buttonGrid'>
        <div className='buttonRow'>
            <Link className='selectButton' to="/instructions">
              Jest
            </Link>
            <div className='selectButton'>
            Mocha
            </div>
        </div>
        <div className='buttonRow'>
            <div className='selectButton'>
            Cypress
            </div>
            <div className='selectButton'>
            Other
            </div>
        </div>
       
       </div>
       </Container>
      </div>
    );
  }
  
  
  
  export default TestRunnerPage;