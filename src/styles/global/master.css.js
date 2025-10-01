window.masterCSSConfig = {
  variables: {
    /** > Colors */
    secondary: "#4a2e19ff",
    primary: "#00804bff",

    /** > Card Shadow */
    "layered-shadow": `0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075)`
  },
  components: {
    /** > Card Group */
    "card-group": "flex ai:center gap:1.5rem p:1rem border:1px|solid|#ddd r:1rem width:60% min-w:180px",
    "card-group__title": "m:0 f:1.25rem f:1rem@<sm",
    "card-group__text": "m:0 f:1rem f:0.75rem@<xs opacity:70%",
    "card-group__image": "w:100px r:50% w:50px@<xs",

    /** > Nav */
    "nav-logo": "w:48px h:48px {w:36px;h:36px}@<3xs",
    "nav-list-container": "f:1rem f:0.8rem@<3xs",
    "nav--hidden": "translateY(-100%) box-shadow:none",
    "nav--initial": "bg:transparent fg:primary_ul.nav-list fill:primary_path",
    "nav--complete": "bg:white box-shadow:layered-shadow fg:primary_ul fill:primary_path",

    /** > Header Parallax */
    "parallax": '{abs;top:0;bottom:0;w:100%;pointer-events:none;transition:filter|.1s|ease-out}>picture {w:100%}>picture>img',

    /** > Card Coffe */
    "card-coffe": 'bg:primary rel flex flex-col jc:space-between r:1.25rem p:2rem box-shadow:layered-shadow w:200px {w:150px;p:1.5rem}@<lg {w:130px;p:1.0rem}@<md ',
    "card-image-box": 'abs top:0 left:50% translate(-50%,-70%)',
    "card-image": 'h:180px h:140px@<lg h:120px@<md',
    "btn": 'bg:white fg:secondary p:.5rem|1rem r:.5rem text-decoration:none text-align:center {p:.25rem|.5rem;f:.85rem}@<md',

    /** Footer */
    "list": 'gap:.5rem p:0 list-style:none color:white>li>a text-decoration:none>li>a',

    /** > Footer accordion (< @sm )*/
    "accordion": "flex flex-col jc:start r:.25rem ai:start w:100%@<sm p:.25rem|1rem@<sm cursor:pointer@<sm ",
    "accordion-header": "flex jc:space-between w:100% p:0px p:.5rem|1rem fg:white r:.5rem@<sm font-weight:700",
    "accordion-content": "overflow:hidden max-h:200px transition:all|0.3s m:0",
    "accordion-collapsed": "h:0@<sm",
    "accordion-icon": "w:24px transition:transform|.3s display:none@>=sm"
  }
}