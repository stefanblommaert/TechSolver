(function (window, google) {

    var Mapster = (function () {
        function Mapster(element, opts) {
            this.gMap = new google.maps.Map(element, opts);
        }
        Mapster.prototype = {
            zoom: function (level) {
                if (level) {
                    this.gMap.setZoom(level);
                } else {
                    return this.gMap.getZoom();
                }
            },
            _on: function (opts) {
                var self = this;
                google.maps.event.addListener(opts.obj, opts.event, function(e){
                    opts.callback.call(self, e);
                }); 
            },
            //maakt een marker met de opgegeven waardes
            addMarker: function (opts) {
                var marker;
                opts.position={
                    lat: opts.lat,
                    lng: opts.lng
                }
                marker = this._createMarker(opts);
                if (opts.event) {
                    this._on({
                        obj: marker,
                        event: opts.event.name,
                        callback: opts.event.callback
                    });
                }
            },
            _createMarker: function (opts) {
                    opts.map = this.gMap;
                    return new google.maps.Marker(opts);
            }
        };
        return Mapster;
    }());
    //factory function
    Mapster.create = function (element, opts) {
        return new Mapster(element, opts);
    };
    window.Mapster = Mapster;

}(window, google));
