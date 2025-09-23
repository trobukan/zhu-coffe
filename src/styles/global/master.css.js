window.masterCSSConfig = {
  variables: {
    // > Colors
    secondary: "#4a2e19ff",
    primary: "#00804bff",
    "unselected-card-color": "#eeeeeeff",
    // > Card Shadow
    "layered-shadow": `0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075)`
  },
  components: {
    "card-coffe": 'bg:primary rel flex flex-col jc:space-between r:1.25rem w:200px p:2rem box-shadow:layered-shadow',
    "card__image": 'abs top:0 left:50% translate(-50%,-70%)',
    "btn": 'bg:white fg:secondary p:0.5rem|1rem r:0.5rem text-decoration:none text-align:center',
    "list": 'gap:0.5rem p:0 list-style:none color:white>li>a text-decoration:none>li>a',

    "accordion": "flex flex-col jc:start r:0.25rem ai:start w:100%@<sm p:0.25rem|1rem@<sm cursor:pointer@<sm ",
    "accordion__header": "flex jc:space-between w:100% p:0px p:0.5rem|1rem fg:white r:0.5rem@<sm",
    "accordion__content": "overflow:hidden h:auto transition:all 0.3s ease flex-col@<sm jc:start ai:start@<sm",
    "accordion__icon": "w:24px transition:all 0.3s display:none@>=sm",
    "accordion--collapsed": "h:0 hidden@<sm",
  }
}