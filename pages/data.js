import styles from '../styles/Home.module.css'
import fs from 'fs';

export default function Data({ data, schema }) {
  // const options = {compact: true, ignoreComment: true, spaces: 4}
  // const result = convert.json2xml({"a":"hello!"}, options);
  function validate()
  {
    alert('to be implemeted');
  }
  return (

    <div className="clearfix gutter-md-spacious"  style={{marginLeft:'2rem'}}>
      <p className="h2">Input Validation</p>
      <div className="col-3 float-left p-2">
        <div className="form-group">
          <div className="form-group-header">
            <label htmlFor="data-textarea">Input</label>
          </div>
          <div className="form-group-body">
            <textarea className="form-control" id="data-textarea" style={{ height: "-webkit-fill-available" }} defaultValue={data}></textarea>
          </div>
        </div>

      </div>
      <div className="col-3 float-left p-2">
        <div className="form-group">
          <div className="form-group-header">
            <label htmlFor="schema-textarea">Schema</label>

          </div>
          <div className="form-group-body">
            <textarea className="form-control" id="schema-textarea" style={{ height: "-webkit-fill-available" }} defaultValue={schema}></textarea>

          </div>
        </div>
      </div>
      <div className="col-3 float-left p-5">
        <button className="btn btn-sm btn-primary float-left" type="button" onClick={validate}>Validate</button>
      </div>

    </div>
  )
}

export async function getStaticProps(context) {
  let data = fs.readFileSync("./data/input1.json", "utf8");
  let schema = fs.readFileSync("./data/schema.json", "utf8");
  return {
    props: { data, schema }, // will be passed to the page component as props
  }
}