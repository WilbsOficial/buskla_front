import {useEffect, useState} from "react";

export const useArrayCookies = (ktone, kttwo, ktthr) => {

  const [arrayCookies, setArrayCookies] = useState([]);

  function getCookie(name) {
    let cookie = {};
    
    document.cookie.split(';').forEach(function(el) {
    let [k,v] = el.split('=');
      cookie[k.trim()] = v;
    });
    
    return cookie[name];
  };        
  const checkCookie = getCookie("concordo")

  useEffect(() => {
    if (checkCookie === "sim") {
        theCookies(ktone, kttwo, ktthr);
    };
  
    function theCookies(ktone, kttwo, ktthr) {
      function getCookieOne(name) {
        let cookie = {};
        
        document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        });
        
        return cookie[name];
      };        
      const checkOne = getCookieOne(ktone);

      function getCookieOneCopy(name) {
        let cookie = {};
        
        document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        });
        
        return cookie[name];
      };        
      const kt1copy = getCookieOneCopy('kt1copy');

      function getCookieTwo(name) {
        let cookie = {};
        
        document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        });
        
        return cookie[name];
      };      
      const checkTwo = getCookieTwo(kttwo);

      function getCookieTwoCopy(name) {
        let cookie = {};
        
        document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        });
        
        return cookie[name];
      };      
      const kt2copy = getCookieTwoCopy('kt2copy');

      function getCookieThree(name) {
        let cookie = {};
        
        document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        });
        
        return cookie[name];
      };        
      const checkThree = getCookieThree(ktthr);

      function getCookieThreeCopy(name) {
        let cookie = {};
      
        document.cookie.split(';').forEach(function(el) {
        let [k,v] = el.split('=');
          cookie[k.trim()] = v;
        });
        
        return cookie[name];
      };        
      const kt3copy = getCookieThreeCopy('kt3copy');
        
      let myCookieList = [];

      if (kt1copy === undefined && kt2copy === undefined && kt3copy === undefined) {
        myCookieList.push(checkOne);
        myCookieList.push(checkTwo);
        myCookieList.push(checkThree);
      };

      if (kt1copy !== undefined) {
        myCookieList[0] = checkOne;
        myCookieList[1] = checkTwo;
        myCookieList[2] = checkThree;
      } else if (kt2copy !== undefined) {
        myCookieList[2] = checkOne;
        myCookieList[0] = checkTwo;
        myCookieList[1] = checkThree;
      } else if (kt3copy !== undefined) {
        myCookieList[1] = checkOne;
        myCookieList[2] = checkTwo;
        myCookieList[0] = checkThree;
      };
          
      setArrayCookies(myCookieList);
    };
  }, [checkCookie, ktone, kttwo, ktthr]);

  return arrayCookies;
};