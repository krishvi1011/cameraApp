String.prototype.repeatify = function(data){
    for(let i  = 0; i < data; i++) {
        console.log("" + this);
    }
};

"Krishvi".repeatify(100);

"Krishvi Srivastava".repeatify(10);