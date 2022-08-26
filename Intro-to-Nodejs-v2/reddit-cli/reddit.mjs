#! /usr/bin/env node
import open from 'open'
import yargs from 'yargs'
import fetch from 'node-fetch'


const { argv } = yargs(process.argv);
// init fetch to reddit api

const res = await fetch('https://www.reddit.com/json')

const data = await res.json()

console.log(data)
const randomIndex = Math.floor(Math.random() * data.data.children.length)

//get random post from reddit api response of all posts on front page

const post = data.data.children[randomIndex];


//log if --print flag is passed

if (argv.print) {
    console.log(
        `Title:${post.data.title}\n
        Link:${post.data.permalink}`
    )

}
else {
    //open in browser if not 
     open(`https://reddit.com${post.data.permalink}`)

}







console.log("Hello from reddit CLI")