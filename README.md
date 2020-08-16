# form-generator
Screenshot:https://ibb.co/7yDHkQv

``` 

mainJsonObject:{
  url:"http:localhost:3000/login",
  method:"post",
  title:"Login",
  data:{
    {
      name:"Username"
      type:"text",
      description:"Your uniq username."
    },
     {
      name:"Password"
      type:"password",
      description:"Your pasword."
    }
  }
}


types:{
  text,
  password,
  time,
  datepicker,
  file,
  rate,
  spinbutton,
  tags,
  range,
  select,
  radio,
  check,
  color
}

allAttrs:{
  name:String,//all
  type:String,//all
  min:Number,// spinbutton range
  max:Number,// spinbutton range
  step:Float, // spinbutton range
  value:String, // form input value
  description:String,// all
  items:Array // select radio check
}

```


## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### There is a mini server for the test.
```
node server
```

