document.bewegen = function(data){
    var pedal = data.throttle/100;
    var wheelspeed = data.speed;
    var aktuellX = 0;
    var vx = 1000;
    var arrow = 0;
    var arrowRot = 0;
    var arrowPosX = 0;
    var arrowPosY = 0;
    var targetDistance = -1213;
    var velocity = wheelspeed/1.6;
    var targetcalc = targetDistance * pedal;
    

    var zeichnen = function() {
        document.getElementById('_Image6').setAttribute('x', String(aktuellX))
        document.getElementById('_Image5').setAttribute('x', String(-aktuellX * 3))
        document.getElementById('_Image4').setAttribute("transform", "rotate(" +arrowRot+")")
        document.getElementById('_Image4').setAttribute('width', String(arrow))
        document.getElementById('_Image4').setAttribute('x', String(arrowPosX))
        document.getElementById('_Image4').setAttribute('y', String(arrowPosY))
        document.getElementById('target').setAttribute('transform',"matrix(1.28491,0,0,0.343538,"+targetcalc+",-78.2588)" )
        document.getElementById('carline').setAttribute('transform',"matrix(0.256461,0,0,0.37313,"+0.785*(-aktuellX-250)+",-0.834002)" )
    }
    /**if (pedal >= 0.0) {
        arrow = 1023;
        arrowRot = 180;
        arrowPosX = -4000;
        arrowPosY = -625;
    }
    if (pedal > 0.2) {
        arrow = 0;
        arrowRot = 0;
        arrowPosX = 500;
    }
    if (pedal > 0.8) {
        arrow = 1023;
        arrowRot = 0;
        arrowPosX = 0;
        arrowPosY = 0;
    }*/


    if (velocity >= 0) {
        targetcalc = targetDistance * 0.5375;
    }
    if (velocity > 6.75*8) {
        targetcalc = targetDistance * 0.44;
    }
    if (velocity > 6.75*9) {
        targetcalc = targetDistance * 0.5;
    }
    if (velocity > 6.75*10) {
        targetcalc = targetDistance * 0.5;
    }
    if (velocity > 6.75*11) {
        targetcalc = targetDistance * 0.5;
    }
    if (velocity > 6.75*12) {
        targetcalc = targetDistance * 0.53;
    }
    if (velocity > 6.75*13) {
        targetcalc = targetDistance * 0.38;
    }
    if (velocity > 6.75*14) {
        targetcalc = targetDistance * 0.44;
    }
    if (velocity > 6.75*15) {
        targetcalc = targetDistance * 0.38;
    }
    if (velocity > 6.75*16) {
        targetcalc = targetDistance * 0.26;
    }
    if (velocity > 6.75*17) {
        targetcalc = targetDistance * 0.2;
    }
    
    
    //Ab hier beginnt neuer Test

    //Hier endet neuer Test
    aktuellX = vx * -pedal;
    var aktuellplus = -1 * aktuellX;
    var targetplus = (1213 + targetcalc) / 1.213;
    //Pfeil nach links
    if (aktuellplus >= targetplus +350){
        arrow = 1023;
        arrowRot = 0;
        arrowPosX = 0;
        arrowPosY = 0;
    }
    //Pfeil nach rechts
    if (targetplus > aktuellplus +200){
        arrow = 1023;
        arrowRot = 180;
        arrowPosX = -4000;
        arrowPosY = -625;
    }
    zeichnen();
    console.log(velocity);
}