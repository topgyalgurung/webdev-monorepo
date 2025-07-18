


## responsive (media queries)

- preferred, small screen and large screen using media query( @media)

```css
article {
    width:50%
}

@media only screen and (max-width: 600px){
    article{
        width: 200px;
    }
}
@media only screen and (min-width:1200px){
    article{
        width: 800px;
    }
}
```
- problem: as project grow larger difficult to maintain 
- easier: we can turn the tables using function like min, max, clamp
  
### clamp it down

- clamp(min, preferred, max)


