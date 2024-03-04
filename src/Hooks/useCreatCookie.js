import {useEffect} from "react";

export const useCreatCookie = (value) => {

  useEffect(() => {
    if (value !== undefined && value !== '') {

      function getCookie1(name) {
        let cookie = {};     
        document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        });
            
        return cookie[name];
      };
      let ktone = getCookie1("ktone");

      function getCookie2(name) {
        let cookie = {};
            
        document.cookie.split(';').forEach(function(el) {
          let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        });
            
        return cookie[name];
      };
      let kttwo = getCookie2("kttwo");

      function getCookie3(name) {
        let cookie = {};
            
        document.cookie.split(';').forEach(function(el) {
          let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        });
            
        return cookie[name];
      };
      let ktthr = getCookie3("ktthr");
      
      if (ktone !== value && kttwo !== value && ktthr !== value) {
        gerar(value);
      };   
    };
  }, [value]);

  function gerar(valueck) {
    if (document.cookie.indexOf("ktone") > 0) {  
      function getCookie1(name) {
        let cookie = {};        
        document.cookie.split(';').forEach(function(el) {
          let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        });
            
        return cookie[name];
      };        
      var ktone = getCookie1("ktone");

      function getCookie2(name) {
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
          });
            
        return cookie[name];
      };   
      var kt1copy = getCookie2("kt1copy");
            
      if (ktone !== '' && kt1copy !== '' && kt1copy !== undefined) {
        document.cookie = "ktone=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax";
        document.cookie = "kt1copy=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax";

        const arr = ["ktone=", ";expires=Wed, 15 May 2030 23:59:59 GMT;path=/;SameSite=Lax"];
        var feito = valueck;
          arr.splice(1, 0, feito);          
          var jogar = arr.join('');   
        document.cookie = jogar; 
                
        document.cookie = "kt2copy=cookiet2;expires=Wed, 15 May 2030 23:59:59 GMT;SameSite=Lax";
      } else {
        criateT2(valueck);
      };
    } else {
      const arr = ["ktone=", ";expires=Wed, 15 May 2030 23:59:59 GMT;path=/;SameSite=Lax"]
        let feito = valueck;
          arr.splice(1, 0, feito);         
        let jogar = arr.join('');   
      document.cookie = jogar; 
    };

    function criateT2(em2) {
      if (document.cookie.indexOf("kttwo") > 0) {
        function getCookie1(name) {
          let cookie = {};              
          document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
          });
                
          return cookie[name];
        };         
        var kttwo = getCookie1("kttwo");

        function getCookie2(name) {
          let cookie = {};    
          document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
          });
                    
          return cookie[name];
        };
        var kt2copy = getCookie2("kt2copy");
                    
        if (kttwo !== '' && kt2copy !== '' && kt2copy !== undefined) {
          document.cookie = "kttwo=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax";
          document.cookie = "kt2copy=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax";
        
          const arr = ["kttwo=", ";expires=Wed, 15 May 2030 23:59:59 GMT;path=/;SameSite=Lax"];
            var feito = em2;
              arr.splice(1, 0, feito);          
            var jogar = arr.join('');   
          document.cookie = jogar; 
                        
          document.cookie = "kt3copy=cookiet3;expires=Wed, 15 May 2030 23:59:59 GMT;SameSite=Lax";
        } else {
          criateT3(em2);
        };
      } else {
        const arr = ["kttwo=", ";expires=Wed, 15 May 2030 23:59:59 GMT;path=/;SameSite=Lax"]
          let feito = em2;
            arr.splice(1, 0, feito);         
          let jogar = arr.join('');   
        document.cookie = jogar; 
      };
    };

    function criateT3(em3) {
      if (document.cookie.indexOf("ktthr") > 0) {
        function getCookie1(name) {
          let cookie = {}; 
          document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
          });
                
          return cookie[name];
        };             
        var ktthr = getCookie1("ktthr");
    
        function getCookie2(name) {
          let cookie = {};    
          document.cookie.split(';').forEach(function(el) {
            let [k,v] = el.split('=');
            cookie[k.trim()] = v;
          });
                
          return cookie[name];
        };  
        var kt3copy = getCookie2("kt3copy");
               
        if (ktthr !== '' && kt3copy !== '' && kt3copy !== undefined) {
          document.cookie = "ktthr=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax";
          document.cookie = "kt3copy=;expires=Sun, 31 Dec 1995 23:59:59 GMT;SameSite=Lax";
    
          const arr = ["ktthr=", ";expires=Wed, 15 May 2030 23:59:59 GMT;path=/;SameSite=Lax"]
            var feito = em3;
              arr.splice(1, 0, feito);         
            var jogar = arr.join('');   
          document.cookie = jogar; 
                  
          document.cookie = "kt1copy=cookiet1;expires=Wed, 15 May 2030 23:59:59 GMT;SameSite=Lax";
        };
      } else {
        const arr = ["ktthr=", ";expires=Wed, 15 May 2030 23:59:59 GMT;path=/;SameSite=Lax"];
          let feito = em3;
            arr.splice(1, 0, feito);         
            let jogar = arr.join('');   
          document.cookie = jogar; 
        document.cookie = "kt1copy=cookiet1;expires=Wed, 15 May 2030 23:59:59 GMT;SameSite=Lax";
      };
    };
  };
}; 