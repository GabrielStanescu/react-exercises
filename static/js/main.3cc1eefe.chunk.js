(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(6),u=a.n(l),o=(a(17),a(7)),s=a(1),r=a(3);function c(e){var t=e.article,a=e.showModal,i=e.tempArticle,l=e.reloadPage,u=Object(s.f)();return n.a.createElement("article",null,n.a.createElement("h1",{className:"title"},t.title),n.a.createElement("ul",{className:"info__container"},n.a.createElement("li",{className:"info__item"},t.tag),n.a.createElement("li",{className:"info__item"},"\u2022"),n.a.createElement("li",{className:"info__item"},"Added by",n.a.createElement("span",{className:"info__author"},t.author)),n.a.createElement("li",{className:"info__item"},"\u2022"),n.a.createElement("li",{className:"info__item"},t.date)),n.a.createElement("div",{className:"modify__container"},n.a.createElement("button",{type:"button",className:"modify__button edit_article",onClick:function(){a(!0),i({id:t.id,title:t.title,tag:t.tag,author:t.author,date:t.date,imgUrl:t.imgUrl,saying:t.saying,content:t.content})}},"Edit"),n.a.createElement("button",{type:"button",className:"modify__button",onClick:function(){fetch("http://localhost:4000/articles/"+t.id,{method:"DELETE"}).then(function(){l()})}},"Delete")),n.a.createElement("img",{src:t.imgUrl,alt:"img"}),n.a.createElement("div",{className:"content__container"},n.a.createElement("p",{className:"content__text"},t.content.substring(0,1e3))),n.a.createElement("div",{className:"readmore__container"},n.a.createElement("button",{type:"button",className:"button",onClick:function(){return u("/details/"+t.id)}},"Read More")))}function m(e){return console.log(e),n.a.createElement("footer",{className:"footer__container"},n.a.createElement("a",{className:"footer__text",onClick:function(){e.val.startIndex>=e.val.articlesDisplayed&&e.fun({startIndex:e.val.startIndex-e.val.articlesDisplayed,endIndex:e.val.endIndex-e.val.articlesDisplayed,articlesDisplayed:3})}},"previous"),n.a.createElement("a",{className:"footer__text",onClick:function(){e.val.endIndex<e.articleCount.length&&e.fun({startIndex:e.val.startIndex+e.val.articlesDisplayed,endIndex:e.val.endIndex+e.val.articlesDisplayed,articlesDisplayed:3})}},"next"))}var d=function(){return n.a.createElement("nav",{className:"nav"},n.a.createElement("ul",{className:"nav__container"},n.a.createElement("li",{className:"nav__item"},n.a.createElement("a",{href:"updates.html",className:"nav__link"},"Travel Updates")),n.a.createElement("li",{className:"nav__item"},n.a.createElement("a",{href:"reviews.html",className:"nav__link"},"Reviews")),n.a.createElement("li",{className:"nav__item"},n.a.createElement("a",{href:"about.html",className:"nav__link"},"About")),n.a.createElement("li",{className:"nav__item"},n.a.createElement("a",{href:"contact.html",className:"nav__link"},"Contact"))))};function p(e){return n.a.createElement("div",{className:"add__container"},n.a.createElement("button",{type:"button",className:"add__button",id:"add_article",onClick:function(){e.fun(!0)}},"+ Add Article"))}var v=a(4);var f=function(e){return n.a.createElement("div",{id:"modal"},n.a.createElement("div",{className:"modal__content"},n.a.createElement("h1",{className:"modal__text"},"Add/Edit Article"),n.a.createElement("div",{className:"modal__input"},n.a.createElement("input",{className:"modal__form",id:"i1",value:e.tempArticle.title,onChange:function(t){return e.setTempArticle(Object(v.a)({},e.tempArticle,{title:t.target.value}))},placeholder:"Please enter title"}),n.a.createElement("input",{className:"modal__form",id:"i2",value:e.tempArticle.tag,onChange:function(t){return e.setTempArticle(Object(v.a)({},e.tempArticle,{tag:t.target.value}))},placeholder:"Please enter tag"}),n.a.createElement("input",{className:"modal__form",id:"i3",value:e.tempArticle.author,onChange:function(t){return e.setTempArticle(Object(v.a)({},e.tempArticle,{author:t.target.value}))},placeholder:"Please enter author"}),n.a.createElement("input",{className:"modal__form",id:"i4",value:e.tempArticle.date,onChange:function(t){return e.setTempArticle(Object(v.a)({},e.tempArticle,{date:t.target.value}))},placeholder:"Please enter date"}),n.a.createElement("input",{className:"modal__form",id:"i5",value:e.tempArticle.imgUrl,onChange:function(t){return e.setTempArticle(Object(v.a)({},e.tempArticle,{imgUrl:t.target.value}))},placeholder:"Please enter image url"}),n.a.createElement("input",{className:"modal__form",id:"i6",value:e.tempArticle.content,onChange:function(t){return e.setTempArticle(Object(v.a)({},e.tempArticle,{content:t.target.value}))},placeholder:"Please enter content"})),n.a.createElement("div",{className:"modal__buttons"},n.a.createElement("button",{className:"add__button",id:"cancel",onClick:function(){e.setShowModal(!1)}},"Cancel"),n.a.createElement("button",{className:"add__button",id:"save",onClick:function(){!function(){var t=e.tempArticle.id;console.log(t),fetch(0===t?"http://localhost:4000/articles":"http://localhost:4000/articles/"+t,{method:0===t?"POST":"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(e.tempArticle)}).then(function(){e.setShowModal(!1),e.reloadPage()})}()}},"Save"))))};var q=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),a=t[0],l=t[1],u=Object(i.useState)(!1),o=Object(r.a)(u,2),s=o[0],v=o[1],q=Object(i.useState)([]),b=Object(r.a)(q,2),_=b[0],E=b[1],g=Object(i.useState)({startIndex:0,endIndex:2,articlesDisplayed:3}),h=Object(r.a)(g,2),N=h[0],x=h[1],A=Object(i.useState)(!1),y=Object(r.a)(A,2),C=y[0],j=y[1],O=Object(i.useState)({id:0,title:"",tag:"",author:"",date:"",imgUrl:"",saying:"",content:""}),k=Object(r.a)(O,2),I=k[0],T=k[1],D=function(){fetch("http://localhost:4000/articles").then(function(e){return e.json()}).then(function(e){v(!0),E(e)},function(e){v(!0),l(e)})};if(Object(i.useEffect)(function(){D()},[]),!0===a)return n.a.createElement("div",null,"Error: ",a.message);if(s){var P=_.filter(function(e,t){return t>=N.startIndex&&t<=N.endIndex}).map(function(e){return n.a.createElement(c,{key:e.id,article:e,showModal:j,tempArticle:T,reloadPage:D})});return console.log(P),console.log(_),console.log(N.startIndex+" "+N.endIndex),n.a.createElement("div",{className:"container"},n.a.createElement(d,null),n.a.createElement(p,{fun:j,val:C}),n.a.createElement("main",{id:"main"},P),!0===C?n.a.createElement(f,{setShowModal:j,tempArticle:I,setTempArticle:T,reloadPage:D}):n.a.createElement(n.a.Fragment,null),n.a.createElement(m,{fun:x,val:N,articleCount:_}))}return n.a.createElement("div",null,"Loading...")};var b=function(){var e=Object(s.g)().id;return fetch("http://localhost:4000/articles/"+e),n.a.createElement("div",null,n.a.createElement("main",null,n.a.createElement("article",null,n.a.createElement("h2",{className:"title title--details"},"The complete guide to explore Trasilvania, with your bike"),n.a.createElement("ul",{className:"info__container info__container--details"},n.a.createElement("li",{className:"info__item"},"Destination Europe"),n.a.createElement("li",{className:"info__item"},"Added by",n.a.createElement("span",{className:"info__author"},"Jonnathan Mercadina")),n.a.createElement("li",{className:"info__item"},"July 01, 2018")),n.a.createElement("img",{src:"img/bike.jpg",alt:"Bike"}),n.a.createElement("div",{className:"content__container"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos et, animi repudiandae libero culpa excepturi obcaecati, voluptate assumenda quos quas, rerum quisquam ex consequuntur ullam sit sint autem eaque magnam maiores! Repudiandae dolore accusantium cumque, facere incidunt, dignissimos numquam dolorum ad, ducimus non nulla veniam tempora fuga libero qui expedita. Voluptate modi sapiente delectus reprehenderit ratione. Tempora ut, iste dolorum delectus eveniet eligendi quibusdam soluta ratione omnis at harum et. Molestiae rerum culpa, necessitatibus obcaecati nesciunt ex dolorem aut quisquam eveniet quibusdam soluta doloremque qui, nostrum laudantium, sapiente iusto odit. Placeat iusto eius asperiores iure atque sint ex! Impedit soluta tenetur alias id doloremque dolores incidunt earum? Animi, quas eligendi! Est voluptas dolor eos quae, harum amet cumque vitae nobis placeat inventore facilis soluta maiores magni dolores consequuntur iure accusamus laborum? Ipsum voluptatum culpa doloremque minima ratione veritatis nesciunt cum quae esse sint optio eos ipsam repellendus ipsa repellat qui, sed fugiat, quaerat adipisci quia temporibus totam iusto. Labore laudantium possimus nisi, doloremque suscipit eligendi dolorem exercitationem excepturi rem odio, a placeat aliquid voluptates amet officia sunt corrupti? Cum, enim illo. Possimus ipsa veritatis excepturi. Hic molestias perspiciatis laborum, saepe excepturi eaque suscipit illum voluptates ad recusandae nam distinctio nulla eos aperiam necessitatibus. Corrupti ipsam numquam, placeat deserunt iste quae dicta facilis natus laboriosam tempore minus modi corporis esse excepturi facere nam quam suscipit? Adipisci consequatur similique, voluptatum sed itaque velit iure optio! Laboriosam eligendi, perspiciatis veniam eum doloremque cum debitis natus eos? Amet culpa asperiores natus harum suscipit ducimus, iure recusandae quibusdam voluptate mollitia unde nulla nemo tempora corrupti facere. Dolore qui, illum vel nesciunt, corrupti necessitatibus, est tenetur repellat fuga officia eius maiores non libero. Voluptates illum ea quaerat, eaque quidem vitae dolorum debitis doloribus dolor accusamus ab similique doloremque, voluptas nemo. Natus dolor officiis illo hic, aliquid iusto eos? Magni quibusdam sunt vel? Neque, tempora temporibus exercitationem qui molestias corrupti, esse voluptatem possimus, ratione ex quod repellat iste nobis! Rerum beatae consectetur itaque pariatur quos omnis perspiciatis laboriosam quis quod, sed iusto. Consectetur qui dolores sequi sint, provident voluptatibus tempora illo repellendus vel suscipit voluptas magni quod quaerat corrupti eaque, optio vitae non recusandae sed atque similique ad in. Error maxime fugiat ut tenetur ipsam quibusdam ipsa recusandae alias blanditiis, deserunt, porro laudantium. Sit omnis cumque pariatur ipsum, fugiat, quae id quo autem sint nihil doloremque impedit magnam. Earum eveniet reprehenderit recusandae nam beatae sint provident?"),n.a.createElement("p",{className:"saying"},"Life is like riding a bicycle, to keep your balance you must keep moving"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, labore quidem? Reprehenderit alias ullam similique libero dignissimos laboriosam maxime illo. Molestias labore veritatis suscipit ut exercitationem, consectetur repudiandae fuga quasi quos velit! Dolor, iusto iure laborum, velit recusandae delectus rem et aut fuga cumque ducimus hic cupiditate vitae itaque doloribus repellat voluptate odio culpa. Cupiditate dolor praesentium quod dignissimos est quos odit voluptate consectetur, modi illum quam minima magnam recusandae. Laudantium pariatur perferendis reiciendis eum at ratione incidunt quo! Dolore, eligendi. Itaque libero eaque enim dignissimos inventore ab exercitationem doloribus debitis perferendis corrupti quisquam ullam repellendus atque totam, necessitatibus cupiditate nobis eos sint earum nihil officiis. Beatae accusamus quam repellat similique at cumque molestiae hic natus cum, vero eaque vel facere quod necessitatibus maiores minima architecto voluptas aut vitae maxime reprehenderit quisquam? Enim animi doloremque, officia repellendus minus corporis deserunt incidunt aperiam voluptatum, nostrum voluptate consectetur officiis sequi aliquid dolores facere ratione, tempora corrupti accusamus sint? Tenetur non illo consequuntur qui at quidem itaque, veniam hic exercitationem omnis atque debitis eligendi voluptatem ab officia accusantium ratione quis dignissimos nisi voluptas neque perferendis! Minus repudiandae rerum illum accusamus, nobis amet, ullam ipsum mollitia explicabo repellat expedita voluptatum ad libero inventore porro voluptates reprehenderit debitis sapiente quis accusantium unde adipisci vitae ab qui? Et modi dolores error blanditiis iusto, pariatur quas ex unde voluptates at inventore, vero temporibus totam nesciunt animi eveniet culpa molestiae officiis repellendus ea! Expedita rerum non obcaecati accusantium, quasi blanditiis officiis pariatur dicta magni quidem error quisquam doloribus numquam voluptate aliquam amet vitae provident mollitia. Corporis deleniti nemo quibusdam fugiat aut voluptate fuga! Velit vitae aliquid obcaecati neque sunt debitis voluptatibus odio esse distinctio dolores sequi nulla, at alias nesciunt dolor nobis. Voluptatum eum enim optio dignissimos, non labore dolor ullam debitis aut, voluptate maxime id natus. Repellendus repudiandae, a libero ab labore quisquam excepturi rem, iste quidem maxime reiciendis amet velit nostrum alias exercitationem! Incidunt commodi unde repellendus magni, totam amet corporis sed maiores doloremque veritatis architecto illum ex recusandae tenetur similique laboriosam velit molestias, in expedita quidem ducimus. Aperiam, officia! Tempora, velit atque necessitatibus corporis omnis officiis, perferendis, sunt molestiae aliquid quis reiciendis deleniti est. Et nemo amet illum, deleniti aperiam ratione, eos consequuntur eum impedit cumque assumenda possimus! Molestiae amet illum fuga facilis. A, aut error. Velit quo, eaque facilis aliquid accusantium tempora culpa porro voluptas neque quaerat, dolores explicabo maiores officia nam provident voluptates.")))),n.a.createElement("footer",{className:"footer__container"},n.a.createElement("button",{className:"footer__text"},"previous article"),n.a.createElement("button",{className:"footer__text footer__link--next"},"next article")))};function _(){return n.a.createElement("div",{className:"container"},n.a.createElement(o.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{path:"/",element:n.a.createElement(q,null)}),n.a.createElement(s.a,{path:"/details/:id",element:n.a.createElement(b,null)}))))}var E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then(function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,l=t.getLCP,u=t.getTTFB;a(e),i(e),n(e),l(e),u(e)})};u.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null))),E()},8:function(e,t,a){e.exports=a(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.3cc1eefe.chunk.js.map