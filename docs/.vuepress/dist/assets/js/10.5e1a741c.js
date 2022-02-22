(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{410:function(e,a,t){"use strict";t.r(a);var i=t(56),o=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"http缓存-强缓存-协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http缓存-强缓存-协商缓存"}},[e._v("#")]),e._v(" Http缓存 —— 强缓存/协商缓存")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("304响应")]),e._v(" "),t("p",[e._v("浏览器缓存（Freshness(Cache-Control & Expires（！添加了Cache-Control原因是Expires设置的是过期的具体时间，会有很多问题（时区，某个电脑事件不准...））) && Validation(Last-Modified & Etag)）--\x3e 强制缓存（设置了Expires，max-age等过期时间的） || 协商缓存，根据一系列条件判断是否可用缓存（Last-Modified...）强制缓存优先级高于协商缓存。")])]),e._v(" "),t("h3",{attrs:{id:"请求头解读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求头解读"}},[e._v("#")]),e._v(" 请求头解读：")]),e._v(" "),t("p",[t("code",[e._v("Last-Modified")]),e._v("：这个头标是一个响应头标，表示客户端(通常指浏览器)所请求资源在服务器端的最后修改时间。通常情况下客户端在接受这个头标后，在以后对这个资源的请求会附带一个'If-Modified-Since'请求头标，而这个头标是想告诉服务器上次客户端所请求资源的最后修改时间。\n"),t("code",[e._v("If-Modified-Since")]),e._v("：浏览器端缓存页面的最后修改时间，即，上次服务器告诉它的文件最后修改时间（Last-Modified）\n"),t("code",[e._v("If-None_Match")]),e._v("：条件式请求首部。对于 GETGET 和 HEAD 请求方法来说，当且仅当服务器上没有任何资源的 ETag 属性值与这个首部中列出的相匹配的时候，服务器端会才返回所请求的资源，响应码为  200  。对于其他方法来说，当且仅当最终确认没有已存在的资源的  ETag属性值与这个首部中所列出的相匹配的时候，才会对请求进行相应的处理。\n"),t("code",[e._v("Etag")]),e._v("：HTTP响应头是资源的特定版本的标识符。服务器将客户端的ETag（作为If-None-Match字段的值一起发送）与其当前版本的资源的ETag进行比较，如果两个值匹配（即资源未更改），服务器将返回不带任何内容的304未修改状态，告诉客户端缓存版本可用（新鲜）。\n"),t("code",[e._v("Cache-Control")]),e._v("：设置浏览器缓存策略，其值若为max-age=xxx表示最大缓存时间为xxx秒，no-cache则表示使用对比缓存来验证缓存数据（Validation，向服务器请求发送If-None-Match），no-store则表示强制所有内容都不进行缓存\n请求条件：当客户端缓存了目标资源但不确定该缓存资源是否是最新版本的时候,就会发送一个条件请求，则web服务器可能会返回HTTP/304响应,这就表明了客户端中所请求资源的缓存仍然是有效的,也就是说该资源从上次缓存到现在并没有被修改过.条件请求可以在确保客户端的资源是最新的同时避免因每次都请求完整资源给服务器带来的性能问题。\n在进行条件请求时,客户端会提供给服务器一个If-Modified-Since请求头,其值为服务器上次返回的Last-Modified响应头中的日期值,还会提供一个If-None-Match请求头,值为服务器上次返回的ETag响应头的值:")]),e._v(" "),t("p",[e._v("服务器会读取到这两个请求头中的值,判断出客户端缓存的资源是否是最新的,如果是的话,服务器就会返回HTTP/304 Not Modified响应,但没有响应体.客户端收到304响应后,就会从缓存中读取对应的资源.\n为何要使用条件请求：\n当用户访问一个网页时,条件请求可以加速网页的打开时间(因为可以省去传输整个响应体的时间),但仍然会有网络延迟,因为浏览器还是得为每个资源生成一条条件请求,并且等到服务器返回HTTP/304响应,才能读取缓存来显示网页.\n更理想的情况是,服务器在响应上指定Cache-Control或Expires指令,这样客户端就能知道该资源的可用时间为多长,也就能跳过条件请求的步骤,直接使用缓存中的资源了.可是,即使服务器提供了这些信息,在下列情况下仍然需要使用条件请求:\n在超过服务器指定的过期时间之后\n如果用户执行了刷新操作的话（在上节给出的图片中,请求头中包含了一个Pragma: no-cache.这是由于用户使用F5刷新了网页.如果用户按下了CTRL-F5(有时称之为“强刷-hard refresh”),你会发现浏览器省略了If-Modified-Since和If-None-Match请求头,也就是无条件的请求页面中的每个资源.)\n避免条件请求：通常来说,缓存是个好东西.如果你想提高自己网站的访问速度,缓存是必须要考虑的.可是在调试的时候,有时候需要阻止缓存,这样才能确保你所访问到的资源是最新的.\n首先，清除浏览器缓存（Ctrl+shift+delete）\n在请求中删除条件请求，添加Pragma:no-cache,每个响应中添加Cache-Control: no-cache\n强缓存（设置Expires/Cache-control）当服务器端设置了Expires缓存时间后，浏览器请求时计算到时间未过期，则不会向服务器发送请求了，直接从缓存中拿去，所以状态码为200(from [xxx] cache)\n缓存存储位置：先从memory cache找，找不到去找disk cache，都没有就请求。\ndisk cache：存储在硬盘，不会随tab或浏览器关闭而消失\nmemory cache：内存，与上面的相反")]),e._v(" "),t("p",[e._v("总结的说，浏览器缓存分为“强缓存”与“协商缓存”两种，其中做缓存判断时先判断是否有强缓存，其次再判断协商缓存：\n（1）强缓存：使用Expires或者Cache-Contorl来判定，其中Expires是HTTP1.0的属性，而Cache-Contorl是HTTP1.1的。\n其中，Expires值内容为一个绝对GMT时间字符串，代表了这个缓存的实效时间（所以有局限性，客户端与服务端时间偏差较大时，会出现缓存混乱；且客户端如果修改本地时间也能够绕开缓存）\n而Cache-Contorl主要有如下字段（主要靠max-age判断）：\n1⃣️no-cache：设置了该字段则表示不使用本地缓存，需使用协商缓存，会与服务器请求确认缓存。\n2⃣️no-store：禁止浏览器缓存数据，即任何缓存都不使用了，每次请求都会重新下载资源\n3⃣️public：表示该资源能够被所有用户缓存（包括中间经过的CDN或其他代理服务器）\n4⃣️private：即只能被终端的用户缓存（什么CDN/代理服务器不许！）\n5⃣️immutable：使得即使刷新浏览器也不会进行重新请求（字面意思是表示该资源永不过期，所以需要与max-age搭配，一般用于防止刷新后就重新发起请求）\n6⃣️✨max-age：即缓存生存时间，单位是秒，如Cache-Contorl: max-age=3600, private; 就表示生存期为1小时，且只有终端缓存")]),e._v(" "),t("p",[e._v("（2）协商缓存：协商缓存就是向服务器去确定是否使用缓存（即确定我客户端的东西是不是最新的），所以协商缓存时客户端与服务端还是会进行通信的。")]),e._v(" "),t("p",[e._v("协商缓存主要依靠header中的两组字段：（Last-Modified或者Etag）与（If-Modified-Since或者If-No-Match），其中前者是第一次请求时响应头中需要带的，后者为之后协商缓存请求时客户端请求头中需要带的（所以第一次响应头如果没有这个东西，那么之后的请求头也不会带，即不存在协商缓存了）")]),e._v(" "),t("ul",[t("li",[t("ol",[t("li",[e._v("Last-Modified / If-Modified-Since：浏览器第一次请求一个资源的时候，服务器返回的header中会加上Last-Modified，\nLast-Modified是一个时间，标识该资源的最后修改时间，例如Last-Modified: Thu,31 Dec 2037 23:59:59 GMT。\n当浏览器再次请求该资源时，request的请求头中会包含If-Modified-Since，该值为缓存之前返回的Last-Modified。服务器收到If-Modified-Since后，根据资源的最后修改时间判断是否命中缓存。\n如果命中缓存，则返回304，并且不会返回资源内容，并且不会返回Last-Modified。")])])]),e._v(" "),t("li",[t("ol",{attrs:{start:"2"}},[t("li",[e._v("Etag / If-No-Match：与Last-Modified/If-Modified-Since不同的是，Etag/If-None-Match返回的是一个校验码。\nETag可以保证每一个资源是唯一的，资源变化都会导致ETag变化。服务器根据浏览器发送的If-None-Match值来判断是否命中缓存。\n与Last-Modified不一样的是，当服务器返回304 Not Modified的响应时，由于ETag重新生成过，response header中还会把这个ETag返回，即使这个ETag跟之前的没有变化。")])])])]),e._v(" "),t("ul",[t("li",[e._v("问题：为什么有了前面一组，还要有Etag呢？*\nHTTP1.1中Etag的出现主要是为了解决几个Last-Modified比较难解决的问题\n"),t("ul",[t("li",[e._v("一些文件也许会周期性的更改，但是他的内容并不改变(仅仅改变的修改时间)，这个时候我们并不希望客户端认为这个文件被修改了，而重新GET；")]),e._v(" "),t("li",[e._v("某些文件修改非常频繁，比如在秒以下的时间内进行修改，(比方说1s内修改了N次)，If-Modified-Since能检查到的粒度是s级的，这种修改无法判断(或者说UNIX记录MTIME只能精确到秒)；")]),e._v(" "),t("li",[e._v("某些服务器不能精确的得到文件的最后修改时间。"),t("br"),e._v(" "),t("strong",[e._v("Last-Modified与ETag是可以一起使用的，服务器会优先验证ETag，一致的情况下，才会继续比对Last-Modified，最后才决定是否返回304。")])])])])]),e._v(" "),t("p",[e._v("301永久重定向（moved permanently）：表示请求的资源分配了新的url，以后应使用新url\n302临时重定向：临时分配了，本次暂时用新的（会返回一个Location字段，浏览器要再次对Location中的url请求，最后才完成本次请求）\n400请求格式错误，Bad Request：请求报文中有语法错误，如url有非法字符等，或提交json时，json格式有误。\n405请求方法错误，method not allowed：请求方式（get、post、delete...）与后台规定的不一样\n415 客户端告诉服务器发送的数据类型（content-type）错误")])])}),[],!1,null,null,null);a.default=o.exports}}]);