const observer = new MutationObserver(function(mutations_list) {
	mutations_list.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(added_node) {
			/*
                if(added_node.id == 'child') {
				console.log('#child has been added');
				observer.disconnect();
			}
            */
            
            //var chat = added_node.querySelector('yt-live-chat-text-message-renderer');
            if(added_node.tagName === "YT-LIVE-CHAT-TEXT-MESSAGE-RENDERER"){
				const messageSpan = added_node.querySelector("#message");
				//console.log(messageSpan.children.length)
				//console.log(messageSpan.textContent)
				if(messageSpan.children.length > 0){
					while (messageSpan.firstChild) {
					  messageSpan.removeChild(messageSpan.firstChild);
					}
				}
				//messageSpan.removeChild(messageSpan.children);
				
			}

		});
	});
});

//observer.disconnect();
const target = document.querySelector("#chatframe");
var iframeDocument = target.contentDocument || target.contentWindow.document;

observer.observe(iframeDocument.querySelector(".style-scope yt-live-chat-item-list-renderer"), { subtree: true, childList: true });