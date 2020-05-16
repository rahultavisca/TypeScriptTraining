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

  deleteItem(e, i) {
    if(e.target.checked) {
      this.data = this.data.filter(item => item !== i);
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

  sort(e: any, h: any, order: string) {
    this.data = this.data.sort(function(d1, d2){
      if(d1[h] < d2[h]) { return order === "asc" ? -1 : 1; }
      if(d1[h] > d2[h]) { return order === "desc" ? -1 : 1; }
      return 0;
    });
    this.requestUpdate("data");
  }

  render(){
    return html `
       <div>
          <h2> The Grid LitElement from Project-Polymer </h2>
          <table>
            <tr>
              ${this.headers.map(h => html`<th>${this.formatHeader(h)} 
              <input type="button" value="&#8593;" @click=${e => this.sort(e, h, "asc")} />
              <input type="button" value="&#8595;" @click=${e => this.sort(e, h, "desc")} />
              </th>`)}
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
                @click=${e => this.deleteItem(e, d)}></td>
              </tr>
            `)}
        </table>
       </div>
    `;
  }
  
}