# gpu-accelerated-css

The goal of this project is to improve your site's performance with GPU-accelerated CSS (when tactfully and sparingly applied). By default, when 3D CSS is used it will automatically trigger GPU acceleration on the page. This is not the case for 2D CSS, for instance. So, in certain situations, when sparingly applied,  triggering the GPU will provide for a better experience and smoother animations - even with 2D CSS.


## LESS Mixin

It's easy to activate the GPU using this simple LESS mixin:

```sass
.accelerate();
```

The CSS is a bit more complicated to remember:

```sass
.accelerate() {
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-transform: translate3d(0, 0, 0);
     -moz-transform: translate3d(0, 0, 0);
      -ms-transform: translate3d(0, 0, 0);
       -o-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
```

For example, in the test styles used in this project, the mixin is applied like this:

```sass
.gpu {
  .accelerate();
}
```


## TODO (move to issues)

 * More examples
 * Make test js more consistent
 * Remove unecessary Bootstrap junk
 * Add link to license
 * More explanation for how it works
 * More browser tests, removed superfluous vendor-specific CSS
 * Clean up acks and split out best-practices
 * Add sliders for animation durations
 * Incorporate animate.css for more tests


## License

MIT


## Best Practices & Acknowledgements

When is triggering the GPU good? In short, it depends, but the answer to this question is still debated. I plan to add more detail later, but for now (also visit the links below):

GPUs are able to render CSS transforms for creating display elements such as pop-overs, modals and animations, images and vector graphics, compositing or blending layers, canvas rendering of fonts, scrolling, and zooming. ([credit](http://blog.smartbear.com/software-quality/bid/167265/Making-the-Most-of-GPU-Acceleration-in-Your-Web-Apps) )

 * Don't: You probably don't need to trigger the GPU for simple, light transitions, such as expanding and collapsing elements.
 * Do: If you have
 * Also, if your web app has an accordion menu, like the responsive `.navbar` shipped with [Twitter Bootstrap](http://twitter.github.com/bootstrap), and if you expect for the element to be used on mobile devices, then it might be a good use of the GPU mixin.

I know this needs lots more explanation, more to come...

For more information, see: [Why does enabling hardware-acceleration in CSS3 slow down performance?](http://stackoverflow.com/questions/10014461/why-does-enabling-hardware-acceleration-in-css3-slow-down-performance)

 * [Increase Your Site’s Performance with Hardware-Accelerated CSS](http://blog.teamtreehouse.com/increase-your-sites-performance-with-hardware-accelerated-css)
 * [Let’s Play With Hardware-Accelerated CSS](http://mobile.smashingmagazine.com/2012/06/21/play-with-hardware-accelerated-css/)