import React from 'react';
import { useState } from 'react';

import { DiffPatcher} from 'jsondiffpatch';
import { html } from './jsondiffpatchFormatters'; 
import './html.css';


// import htmlFormatter from './jsondiffpatchFormatters/html';
// import baseFormatter from './jsondiffpatchFormatters/base';



const App = () => {
  const [json1, setJson1] = useState('{}');
  const [json2, setJson2] = useState('{}');
  const [diffHtml, setDiffHtml] = useState('');

  const handleCompare = () => {
    try {
      const json1Parsed = JSON.parse(json1);
      const json2Parsed = JSON.parse(json2);
      const diffPatcher = new DiffPatcher();
      const delta = diffPatcher.diff(json1Parsed, json2Parsed);
      if (delta) {
        const htmlDiff = html.format(delta);
        setDiffHtml(htmlDiff);
      } else {
        setDiffHtml('<div>No differences</div>');
      }
    } catch (e) {
      setDiffHtml('<div>Error parsing JSON</div>');
    }
  };

  return (
    <div>
      <textarea
        rows="10"
        cols="30"
        placeholder="Enter first JSON"
        value={json1}
        onChange={(e) => setJson1(e.target.value)}
      />
      <textarea
        rows="10"
        cols="30"
        placeholder="Enter second JSON"
        value={json2}
        onChange={(e) => setJson2(e.target.value)}
      />
      <button onClick={handleCompare}>Compare</button>
      <div dangerouslySetInnerHTML={{ __html: diffHtml }} />
    </div>
  );
};

export default App;

