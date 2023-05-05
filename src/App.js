import logo from './logo.svg';
import './App.css';
import styled from './styled.ts';
import {Link} from 'react-router-dom';
import { ReactComponent as Arrow } from './Arrow.svg';

import { DiffEditor } from '@monaco-editor/react';

const THEME_NAME = 'circleci-config-dark';

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

export const configEditorTheme = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'comment', foreground: '#959595' },
    { token: 'type', foreground: '#fff176' },
    { token: 'string', foreground: '#ffffff' },
    { token: '', background: '#2B2B2B' },
  ],
  colors: {
    'editor.background': '#2B2B2B',
    'editorCursor.foreground': '#FBE17B',
  },
};

const options = {
  readOnly: true,
  minimap: { enabled: false },
  renderSideBySide: false,
  renderOverviewRuler: false,
    scrollbar: {
        vertical:"hidden",
        horizontal: "hidden",
        handleMouseWheel:false,
    },
  lineNumbers: false,
  scrollBeyondLastLine: false,
  lineNumbersMinChars: 5,
  diffWordWrap: "on",
  wrappingIndent: "indent",
  fontFamily: 'Menlo'
};




const step1Text = "# other steps"

const step1TextAdd = "# other steps\n - run:\n    name: Install JUnit coverage reporter\n    command: npm install --save-dev jest-junit"

const step2Text = " - run:\n    name: Run tests\n    command: |\n             # your test command here"

const step2TextAdd = " - run:\n    name: Run tests\n    command: |\n             mkdir test-results\n             # your test command here\n - store_test_results:\n    path: test-results"

const step3Text = " - run:\n    name: Run tests\n    command: |\n             mkdir test-results"

const step3TextAdd = " - run:\n    name: Run tests\n    command: |\n             mkdir test-results\n             npx jest --listTests | circleci tests run--command=\"xargs npx jest --config jest.config.js --runInBand\"\n    environment:\n        JEST_UNIT_OUTPUT_DIR: test-results\n        JEST_UNIT_ADD_FILE_ATTRIBUTE: true"

const finalCheckText = " - run:\n    name: Run tests\n    command: |\n             mkdir test-results\n             npx jest --listTests | circleci tests run--command=\"xargs npx jest --config jest.config.js --runInBand\"\n    environment:\n        JEST_UNIT_OUTPUT_DIR: test-results\n        JEST_UNIT_ADD_FILE_ATTRIBUTE: true\n - store_test_results:\n    path: test-results"

const editorWillMount = monaco => {
  
    monaco.editor.defineTheme(THEME_NAME, configEditorTheme);
};

function App() {

  return (
    <div className="App">
      <Container>
        <div className="header"><Link style={{width: '32px'}} to="/start"><Arrow></Arrow></Link>
      
      <h2>Set up rerun failed tests only</h2></div>
        
        
        <p>Using <code>circleci tests run</code> gives you access to CircleCI's most powerful testing features, including rerunning failed tests only.</p>
        <h3>Instructions</h3>
        <h4>Step 1: Add JUnit coverage reporter</h4>
        <p class="small">The Jest JUnit reporter is required. You can add it to your <code>package.json</code> or add a step to install it in your config, e.g. using <code>npm install</code>.</p>
        <DiffEditor width="592px" height="76px" theme={THEME_NAME} defaultLanguage="yaml" language="yaml" options= {options} original={step1Text} modified={step1TextAdd} beforeMount={editorWillMount} />

        <h4>Step 2: Upload test results</h4>
        <p class="small">Add a new step to your test job to run your tests and add a <code>mkdir</code> command to it in order to create a directory for your test results. Note the <code>|</code>character is used to run a list of commands.</p>
        <DiffEditor width="592px" height="133px" theme={THEME_NAME} defaultLanguage="yaml" language="yaml" options= {options} original={step2Text} modified={step2TextAdd} beforeMount={editorWillMount} />

        <h4>Step 3: Pass in test files</h4>
        <p class="small">Pipe the list of test files into the  <code>circleci tests run</code>. Add this command below your command from Step 2. If you use Yarn, you can replace <code>npx</code> with <code>yarn</code></p>
        <DiffEditor width="592px" height="171px" theme={THEME_NAME} defaultLanguage="yaml" language="yaml" options= {options} original={step3Text} modified={step3TextAdd} beforeMount={editorWillMount} />

        <h4>Final check</h4>
        <p class="small">Check the changes you made in steps 1-3. Your final config should look something like this:</p>
        <DiffEditor width="592px" height="209px" theme={THEME_NAME} defaultLanguage="yaml" language="yaml" options= {options} original={finalCheckText} modified={finalCheckText} beforeMount={editorWillMount} />
      </Container>
      
       
    </div>
  );
}



export default App;
