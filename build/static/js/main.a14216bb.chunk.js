(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},119:function(e,t,c){},120:function(e,t,c){},122:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c.n(s),n=c(70),r=c.n(n),i=(c(82),c(15)),o=(c(83),c(84),c(72)),l=c.n(o),j=c(73),d=c.n(j),u=c(26),h=c(20),m=c(36),b=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(m.a)(Object(m.a)({},e),{},{basketArray:[].concat(Object(h.a)(e.basketArray),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basketArray.findIndex((function(e){return e.id===t.id})),s=Object(h.a)(e.basketArray);return c>=0?s.splice(c,1):console.log("Can not remove product (id: ".concat(t.id,") as it is not basket")),Object(m.a)(Object(m.a)({},e),{},{basketArray:s});case"SET_CURRENT_USER":return Object(m.a)(Object(m.a)({},e),{},{currentUser:t.userCurrent});default:return e}},p=c(6),O=Object(s.createContext)(),x={basketArray:[],currentUser:null},g=function(e){var t=Object(s.useReducer)(b,x),c=Object(i.a)(t,2),a=c[0],n=c[1];return Object(p.jsx)(O.Provider,{value:[a,n],children:e.children})},_=c(58),f=(c(87),c(123),c(124),_.a.initializeApp({apiKey:"AIzaSyDoXCRev9MuBN61fO7MzWc0PWUkQzMAgIY",authDomain:"ecommerce-906f8.firebaseapp.com",projectId:"ecommerce-906f8",storageBucket:"ecommerce-906f8.appspot.com",messagingSenderId:"572342653221",appId:"1:572342653221:web:7fc75971556dc4b6f18acc",measurementId:"G-ZR06JFCCXR"})),v=f.auth();_.a.firestore();var N=function(){var e=Object(s.useContext)(O),t=Object(i.a)(e,2),c=t[0];return t[1],Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)(u.b,{to:"/",children:Object(p.jsx)("img",{className:"header_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:""})}),Object(p.jsx)("div",{className:"header_delivery_place",children:Object(p.jsx)("p",{children:"BD"})}),Object(p.jsxs)("div",{className:"header_search",children:[Object(p.jsx)("input",{className:"header_search_input",type:"text"}),Object(p.jsx)(l.a,{className:"header_search_icon"})]}),Object(p.jsx)("div",{className:"header_delivery_place",children:Object(p.jsx)("p",{children:"BD"})}),Object(p.jsxs)("div",{className:"header_nav",children:[Object(p.jsx)(u.b,{to:!c.currentUser&&"/login",style:{textDecoration:"none"},children:Object(p.jsxs)("div",{onClick:function(){null!=c.currentUser&&v.signOut()},className:"header_option",children:[Object(p.jsxs)("span",{className:"header_option_one",children:["Hello ",c.currentUser?c.currentUser.email:"Guest"]}),Object(p.jsx)("span",{className:"header_option_two",children:c.currentUser?"Sign Out":"Sign In"})]})}),Object(p.jsx)(u.b,{to:"./orders",children:Object(p.jsxs)("div",{className:"header_option",children:[Object(p.jsx)("span",{className:"header_option_one",children:"Returns"}),Object(p.jsx)("span",{className:"header_option_two",children:"& Orders"})]})}),Object(p.jsxs)("div",{className:"header_option",children:[Object(p.jsx)("span",{className:"header_option_one",children:"Your"}),Object(p.jsx)("span",{className:"header_option_two",children:"Prime"})]}),Object(p.jsx)(u.b,{to:"/checkout",style:{textDecoration:"none"},children:Object(p.jsxs)("div",{className:"header_option_basket",children:[Object(p.jsx)(d.a,{}),Object(p.jsx)("span",{className:"header_option_two basket_count",children:c.basketArray.length})]})})]})]})};c(94),c(95);var y=function(e){var t=e.id,c=e.title,a=e.price,n=e.image,r=e.rating,o=Object(s.useContext)(O),l=Object(i.a)(o,2),j=l[0],d=l[1];return console.log("This is the Basket",j),Object(p.jsxs)("div",{className:"product",children:[Object(p.jsxs)("div",{className:"product_info",children:[Object(p.jsx)("p",{className:"product_name",children:c}),Object(p.jsx)("p",{className:"product_price",children:Object(p.jsxs)("strong",{children:["$",a]})}),Object(p.jsx)("div",{className:"product_rating",children:Array(r).fill().map((function(e){return Object(p.jsx)("p",{children:"\u2b50"})}))})]}),Object(p.jsx)("img",{className:"product_image",src:n,alt:""}),Object(p.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:c,price:a,image:n,rating:r}})},className:"product_button",children:"Add to basket"})]})};var C=function(){return Object(p.jsx)("div",{className:"home",children:Object(p.jsxs)("div",{className:"home_container",children:[Object(p.jsx)("img",{className:"home_image",src:"https://m.media-amazon.com/images/I/41F4syCw54L._SX1500_.jpg",alt:""}),Object(p.jsxs)("div",{className:"home_row",children:[Object(p.jsx)(y,{id:1111,title:"Amazon Basics Tritan 22 Piece (11 Containers and 11 Lids) Locking Food Storage Container - Clear",price:44,image:"https://m.media-amazon.com/images/I/811RbXeLjNL._AC_UL320_.jpg",rating:5}),Object(p.jsx)(y,{id:1112,title:"Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon ",price:40,image:"https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL.__AC_SX300_SY300_QL70_FMwebp_.jpg",rating:5}),Object(p.jsx)(y,{id:1119,title:"Oculus Quest 2 \u2014 Advanced All-In-One Virtual Reality Headset \u2014 128 GB",price:299.4,image:"https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UY218_.jpg",rating:5}),Object(p.jsx)(y,{id:1118,title:"Everyday essentials you might like",price:40,image:"https://m.media-amazon.com/images/I/61RJqWVnMIS._AC_SY200_.jpg",rating:5})]}),Object(p.jsxs)("div",{className:"home_row",children:[Object(p.jsx)(y,{id:1113,title:"Zevro Zero Gravity Magnetic Spice Rack with 12 Canisters",price:40,image:"https://m.media-amazon.com/images/I/61gWcQJp3BL._AC_SL1500_.jpg",rating:5}),Object(p.jsx)(y,{id:1114,title:"Create with strip lights",price:40,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg",rating:5}),Object(p.jsx)(y,{id:1115,title:"Create with strip lights",price:40,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg",rating:5}),Object(p.jsx)(y,{id:1116,title:"Create with strip lights",price:40,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg",rating:5})]}),Object(p.jsx)("div",{className:"home_row",children:Object(p.jsx)(y,{id:1117,title:"Create with strip lights",price:40,image:"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg",rating:5})})]})})},k=(c(96),c(97),c(39)),S=c.n(k);var A=function(){var e=Object(s.useContext)(O),t=Object(i.a)(e,2),c=t[0],a=(t[1],0);return function(){for(var e=0;e<c.basketArray.length;e++)a+=c.basketArray[e].price}(),Object(p.jsxs)("div",{className:"subtotal",children:[Object(p.jsx)(S.a,{renderText:function(e){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["Subtotal (",c.basketArray.length," items):",Object(p.jsxs)("strong",{children:["$",a]})]}),Object(p.jsxs)("small",{className:"subtotal_gift",children:[Object(p.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:0,displayType:"text",thousandSeparator:!0,prefix:"5"}),Object(p.jsx)(u.b,{to:"/payment",children:Object(p.jsx)("button",{className:"checkoutButton",children:"Proceed to Checkout"})})]})},E=(c(99),function(e){var t=e.id,c=e.title,a=e.price,n=e.image,r=e.rating,o=e.hideButton,l=Object(s.useContext)(O),j=Object(i.a)(l,2),d=j[0],u=j[1];return console.log("This is the CheckoutProduct",d),Object(p.jsxs)("div",{className:"checkoutProduct",children:[Object(p.jsx)("img",{className:"checkoutProduct_image",src:n,alt:""}),Object(p.jsxs)("div",{className:"checkoutProduct_info",children:[Object(p.jsx)("p",{className:"checkoutProduct_title",children:c}),Object(p.jsx)("p",{className:"checkoutProduct_price",children:Object(p.jsxs)("strong",{children:["$",a]})}),Object(p.jsx)("div",{className:"checkoutProduct_rating",children:Array(r).fill().map((function(e){return Object(p.jsx)("p",{children:"\u2b50"})}))}),o?"":Object(p.jsx)("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:t})},className:"checkoutProduct_button",children:"Remove from Basket"})]})]})});var w=function(){var e,t=Object(s.useContext)(O),c=Object(i.a)(t,2),a=c[0];return c[1],Object(p.jsxs)("div",{className:"checkout",children:[Object(p.jsxs)("div",{className:"checkout_left",children:[Object(p.jsx)("img",{className:"checkout_ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("h2",{className:"checkout_title",children:["Hello, ",a.currentUser?null===(e=a.currentUser)||void 0===e?void 0:e.email:"Guest",Object(p.jsx)("br",{}),"Your Shopping Cart"]}),a.basketArray.map((function(e){return Object(p.jsx)(E,{id:e.id,title:e.title,price:e.price,image:e.image,rating:e.rating,hideButton:!1})}))]})]}),Object(p.jsx)("div",{className:"checkout_right",children:Object(p.jsx)(A,{})})]})},T=(c(100),c(74)),U=c.n(T),B=c(22),R=function(){var e=Object(B.f)(),t=Object(s.useState)(""),c=Object(i.a)(t,2),a=c[0],n=c[1],r=Object(s.useState)(""),o=Object(i.a)(r,2),l=o[0],j=o[1],d=Object(s.useState)(!1),h=Object(i.a)(d,2),m=h[0],b=h[1];function O(e){n(e.target.value)}function x(e){j(e.target.value)}return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)(u.b,{to:"/",children:Object(p.jsx)("img",{className:"login_logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(p.jsxs)("div",{className:"login_container",children:[Object(p.jsx)("h1",{className:"login_container_SignIn",children:"Sign In"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("h5",{className:"login_container_header",children:"E-mail"}),m?Object(p.jsx)("input",{onChange:O,type:"text",className:"login_input_field",style:{borderColor:"red",boxShadow:"0 0 0 3px rgba(221,0,0,.1) inset"}}):Object(p.jsx)("input",{onChange:O,type:"text",className:"login_input_field"}),Object(p.jsx)("h5",{className:"login_container_header",children:"Password"}),m?Object(p.jsx)("input",{onChange:x,type:"password",className:"login_input_field",style:{borderColor:"red",boxShadow:"0 0 0 3px rgba(221,0,0,.1) inset"}}):Object(p.jsx)("input",{onChange:x,type:"password",className:"login_input_field"}),Object(p.jsx)("p",{children:m?Object(p.jsxs)("div",{className:"login_error",children:[Object(p.jsx)(U.a,{}),Object(p.jsx)("span",{className:"login_error_info",children:"Your E-mail or Password is not correct"})]}):""}),Object(p.jsx)("button",{onClick:function(t){t.preventDefault(),v.signInWithEmailAndPassword(a,l).then((function(t){console.log("New Auth User Created After Sign In:"),console.log(t),t&&e.push("/")})).catch((function(e){b(!0),console.log("Error-message "+e.message)}))},className:"signInButton",children:"Sign In"})]}),Object(p.jsx)("p",{className:"login_container_para",children:"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."}),Object(p.jsx)("button",{onClick:function(t){t.preventDefault(),v.createUserWithEmailAndPassword(a,l).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){console.log(e.message)}))},className:"registrationButton",children:"Create Your Amazon Account"})]})]})},P=c(0),z=c.n(P),D=c(4),I=(c(101),c(75)),M=c.n(I),F=c(35),L=function(){var e=Object(s.useContext)(O),t=Object(i.a)(e,2),c=t[0],a=t[1],n=Object(F.useStripe)(),r=Object(F.useElements)(),o=Object(s.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],h=Object(B.f)(),m=Object(s.useState)(null),b=Object(i.a)(m,2),x=b[0],g=b[1],_=Object(s.useState)(!0),v=Object(i.a)(_,2),N=v[0],y=v[1],C=Object(s.useState)(!1),k=Object(i.a)(C,2),A=k[0],w=k[1],T=0;!function(){for(var e=0;e<c.basketArray.length;e++)T+=c.basketArray[e].price}();var U=function(){var e=Object(D.a)(z.a.mark((function e(t){var s,i,o,l,j,u;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),w(!0),e.next=4,n.createPaymentMethod({type:"card",card:r.getElement(F.CardElement)});case 4:if(s=e.sent,i=s.errorValue,o=s.paymentMethod,i){e.next=22;break}return e.prev=8,l=o.id,e.next=12,M.a.post("https://ecommerce-livedemo.herokuapp.com/payments/create?total=".concat(100*T),{id:l});case 12:(j=e.sent).data.success&&(console.log("Successful Payment"),d(!0),g(null),w(!1),f.database().ref().child("usersTable").child(null===(u=c.currentUser)||void 0===u?void 0:u.uid).child("orders").child(l).set({basketArray:c.basketArray,amount:T,created:Date()}),a({type:"EMPTY_BASKET_ARRAY"}),h.push("/orders")),!1===j.data.success&&console.log("Unsuccessful Payment"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(8),console.log("Error",e.t0);case 20:e.next=23;break;case 22:console.log(i.message);case 23:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"payment",children:[Object(p.jsxs)("h1",{children:["Checkout (",Object(p.jsxs)(u.b,{to:"/checkout",className:"payment_countItem",children:[c.basketArray.length," items"]}),")"]}),Object(p.jsxs)("div",{className:"payment_section",children:[Object(p.jsx)("div",{className:"payment_title",children:Object(p.jsx)("h3",{children:"Delivery Address"})}),Object(p.jsxs)("div",{className:"payment_address",children:[Object(p.jsx)("p",{children:c.currentUser?c.currentUser.email:""}),Object(p.jsx)("p",{children:"Dhaka"}),Object(p.jsx)("p",{children:"Bangladesh"})]})]}),Object(p.jsxs)("div",{className:"payment_section",children:[Object(p.jsx)("div",{className:"payment_title",children:Object(p.jsx)("h3",{children:"Review items and Delivery"})}),Object(p.jsx)("div",{className:"payment_items",children:c.basketArray.map((function(e){return Object(p.jsx)(E,{id:e.id,title:e.title,price:e.price,image:e.image,rating:e.rating,hideButton:!1})}))})]}),Object(p.jsxs)("div",{className:"payment_section",children:[Object(p.jsx)("div",{className:"payment_title",children:Object(p.jsx)("h3",{children:"Payment Method"})}),Object(p.jsx)("div",{className:"payment_details",children:Object(p.jsxs)("form",{onSubmit:U,className:"payment_form",children:[Object(p.jsx)(F.CardElement,{onChange:function(e){y(e.empty),console.log(N),g(e.error?e.error.message:"")}}),Object(p.jsxs)("div",{className:"payment_price_container",children:[Object(p.jsx)(S.a,{renderText:function(e){return Object(p.jsxs)("h3",{children:["Order Total ",T]})},decimalScale:2,value:0,displayType:"text",thousandSeparator:!0,prefix:"5"}),Object(p.jsx)("button",{className:"payment_button",type:"submit",disabled:A||N||j,children:Object(p.jsx)("span",{children:A?Object(p.jsx)("p",{children:"Processing Now"}):"Buy Now"})})]}),x&&Object(p.jsx)("div",{children:x})]})})]})]})},Y=c(76),G=(c(119),c(120),function(e){var t,c=e.order;return Object(p.jsxs)("div",{className:"orderList",children:[Object(p.jsx)("h2",{children:"Order"}),Object(p.jsx)("p",{className:"order_id",children:Object(p.jsx)("small",{children:c.id})}),null===(t=c.data.basketArray)||void 0===t?void 0:t.map((function(e){return Object(p.jsx)(E,{id:e.id,title:e.title,price:e.price,image:e.image,rating:e.rating,hideButton:!0})})),Object(p.jsx)(S.a,{renderText:function(e){return Object(p.jsxs)("h3",{className:"order_total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"5"})]})}),K=function(){var e=Object(s.useContext)(O),t=Object(i.a)(e,2),c=t[0],a=(t[1],Object(s.useState)([])),n=Object(i.a)(a,2),r=n[0],o=n[1];return Object(s.useEffect)((function(){var e;(console.log(c.currentUser),c.currentUser)?f.database().ref().child("usersTable").child(null===(e=c.currentUser)||void 0===e?void 0:e.uid).child("orders").on("value",(function(e){var t=[];e.forEach((function(e){console.log(e),console.log(e.key),console.log(e.val()),t.push({id:e.key,data:e.val()}),o(t.map((function(e){return{id:e.id,data:e.data}})))}))})):o([])}),[]),Object(p.jsxs)("div",{className:"orders",children:[Object(p.jsx)("h1",{children:"YOUR ORDERS"}),Object(p.jsxs)("div",{className:"orders_details",children:["Number of Total Orders: ",r.length,console.log(r),null===r||void 0===r?void 0:r.map((function(e){return Object(p.jsx)(G,{order:e})}))]})]})},X=Object(Y.a)("pk_test_51Jh096JEG44a6VQqrZKpR2WpNpqfYCK9HeO8lU6hXksmPmRapDZdVobynon5QTcNTq6hT4YJqjThejqhpfwILf1f00JlIW81pC");var J=function(){var e=Object(s.useContext)(O),t=Object(i.a)(e,2),c=(t[0],t[1]);return Object(s.useEffect)((function(){v.onAuthStateChanged((function(e){console.log("New Auth User from App.js :"),console.log(e),c(e?{type:"SET_CURRENT_USER",userCurrent:e}:{type:"SET_CURRENT_USER",userCurrent:null})}))}),[]),Object(p.jsx)(u.a,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(B.c,{children:[Object(p.jsx)(B.a,{path:"/login",children:Object(p.jsx)(R,{})}),Object(p.jsxs)(B.a,{path:"/checkout",children:[Object(p.jsx)(N,{}),Object(p.jsx)(w,{})]}),Object(p.jsxs)(B.a,{path:"/payment",children:[Object(p.jsx)(N,{}),Object(p.jsx)(F.Elements,{stripe:X,children:Object(p.jsx)(L,{})})]}),Object(p.jsxs)(B.a,{path:"/orders",children:[Object(p.jsx)(N,{}),Object(p.jsx)(K,{})]}),Object(p.jsxs)(B.a,{path:"/",children:[Object(p.jsx)(N,{}),Object(p.jsx)(C,{})]})]})})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,131)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(g,{children:Object(p.jsx)(J,{})})}),document.getElementById("root")),W()},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},99:function(e,t,c){}},[[122,1,2]]]);
//# sourceMappingURL=main.a14216bb.chunk.js.map