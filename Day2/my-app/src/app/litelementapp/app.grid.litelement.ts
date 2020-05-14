import {LitElement, html, customElement, property, css} from 'lit-element';
// LitElement --> Base class for Element Creation
// encapulate, properties, styles, events, template
// Lifecycle management for Shadow-DOM

// html --> inline constant funcation that will be
// use for containing HTML template for rendering

// customElement --> inline constant function for
// defining the LiteElement so that parent can use it

const tableCss = css `
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}

th {
  background-color: #4CAF50;
  color: white;
}
`;

@customElement('grid-element')
export class GridElement extends LitElement{
  //data: any;
  //headers: any;
  // define properties, to accept input
  // from the container
  //@property({type: String}) name;
  // static properties declaration
  static get properties() {
    return {
        data: {type: Array},
        headers: {type: Array}
    };
   }


 // style getter
 static get styles() {
  return [
    tableCss
  ]
}

  constructor() {
    super();
  }

  delete(e) {
    if(e.target.checked) {
      this.data = this.data.filter(item => item[this.headers[0]] !== Number(e.target.value));
    }
  }

  selectAll(e) {
    if(e.target.checked) {
      this.data.forEach(item => item.IsDeleted = true);
    }
    else {
      this.data.forEach(item => item.IsDeleted = false);
    }
    this.requestUpdate();
  }

  formatHeader(h) {
    return h
    // insert a space before all caps
    .replace(/([A-Z])/g, ' $1')
    // uppercase the first character
    .replace(/^./, function(str){ return str.toUpperCase(); })
  }

  render(){
    return html `
       <div>
          <h2> The Grid LitElement from Project-Polymer </h2>
          <table>
            <tr>
              ${this.headers.map(h => html`<th>${this.formatHeader(h)}</th>`)}
              <th>
                <input type="checkbox" id="selectAll" name="SelectAll" value="SelectAll" @click=${this.selectAll}><label for="selectAll">Select All</label>
              </th>
            </tr>
            ${this.data.map(d => html`
              <tr>
                ${this.headers.map(h => 
                  html`
                    <td>${d[h]}</td>
                  `
                )}
                <td><input type="checkbox"
                value=${d[this.headers[0]]}
                .checked=${d.IsDeleted}
                @click=${this.delete}></td>
              </tr>
            `)}
        </table>
       </div>
    `;
  }
}