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

function LanguagePage2() {

    return (
      <div className='App'>
       <Container><h2>Set up rerun failed tests only</h2>      
       <p>Using <code>circleci tests run</code> gives you access to CircleCI's most powerful testing features, including rerunning failed tests only.</p>
       <h3>Language/Framework</h3>
       <div className='buttonGrid'>
        <div className='buttonRow'>
            <Link className='selectButton' to="/testRunnerCLIScript">
              Node
            </Link>
            <div className='selectButton'>
              Ruby
            </div>
        </div>
        <div className='buttonRow'>
            <div className='selectButton'>
              Python
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
  
  
  
  export default LanguagePage2;