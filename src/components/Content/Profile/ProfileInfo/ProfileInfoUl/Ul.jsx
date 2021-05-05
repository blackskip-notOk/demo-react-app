import React from "react";
import { array } from "yup/lib/locale";

const Ul = ({contacts, className, contactsIcons}) => {
    let contactsArray = Array.from(Object.values(contacts));
    let object = {
        github: 'git',
        vk: 'vk.com/dimych',
        facebook: 'facebook.com',
        instagram: 'instagra.com/sds',
        twitter: 'https://twitter.com/@sdf',
        website: 'www.website',
        youtube: 'youtubecanal',
        mainLink: 'mainlinkmy'
    }
    let arrayStart = Object.entries(object);
    // const obj = arrayStart.reduce((prevObj, [key, value]) => ({ ...prevObj, [key]: value }), {});
    // console.log(obj);
    const createArray = (arr) => {
        // console.log(arr);
        //arr = [[], [], ...]
         let max = 0;
         for (let key in arr) {
             //key = index
             max = Math.max(arr[key].length - 1, max);
             //key  = 0 => arr[key] = [github, git]
             //max = 1
         }
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result[i] = {};
            //i = 0 => result[i] => [{}]
            //console.log(result);
            for (let j = 0; j < 1; j++) {
        console.log(arr[j][0+1]);
        //in object result[0] prop github = git
        //
            result[i][arr[j][0]] = arr[j][i + 1] ; 
                // arr[j][i + 1] : null);
                // console.log(result[i][arr[j]]);
                // console.log(result[i][arr[j][i + 1]]);
            //j = 0 => result[0] = [{}] => arr[0][0] = github 
            //
        //     }
         }
        console.log(result);
        }
        return result;
        }
    createArray(arrayStart);

    // const parent = [
    //     ['a', 1, 2, 3],
    //     ['b', 4, 5, 6],
    //     ['c', 7, 8, 9, 10],
    //     ['d', 11, 12, 13, 14, 15],
    //   ];
      
    //   function transform(array) {
    //     let max = 0;
    //     for (let key in array) {
    //       max = Math.max(array[key].length - 1, max);
    //     }
    //     let obj = [];
    //     for (let i = 0; i < max; i++) {
    //       obj[i] = {};
    //       for (let j = 0; j < array.length; j++) {
    //         obj[i][array[j][0]] = (array[j][i + 1] !== undefined ? array[j][i + 1] : null);
    //       }
    //     }
    //     return obj;
    //   }
      
    //   console.log(transform(parent));

    let contact = contactsArray.map(contact => {
        if (contact) {
            return <li><a href={contact} target='_blanc'>
                        {contact}
                    </a></li>
        } else return null;
    });
    return (
        <ul className={className}>
            {contact}
        </ul>
    );
}

export default Ul;