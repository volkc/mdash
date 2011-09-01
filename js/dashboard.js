
( function( mdash, $ )
{
    
    var Dashboard = mdash.Dashboard = function() {},
        proto     = Dashboard.prototype;
    
    Dashboard.VERSION = '0.5.1';
    
    proto.init = function()
    {
        this.$fontSizes  = $( '#fontctrl > a' );
        this.$helpCtrl   = $( '#helpctrl' );
        this.$getStarted = $( '#getstarted' );
        this.$bookmarks  = $( '#bookmarks' );
        this.$version    = $( '#version' );
        
        this.manager  = new mdash.Manager(),
        this.fontCtrl = new mdash.FontCtrl(  ),
        this.helpCtrl = new mdash.HelpCtrl( $helpCtrl, $getStarted, $bookmarks );
        
        this.fontCtrl.init();
        this.helpCtrl.init();
        this.manager.init( this.loadBookmarks.bind( this ) );
        
        this.showVersion();
        this.loadBookmarks();
    };
    
    proto.loadBookmarks = function()
    {
        var _this = this;
        
        this.leftColumn  = new mdash.Column( $( '#bookmarks > .left' ) );
        this.rightColumn = new mdash.Column( $( '#bookmarks > .right' ) );
            
        manager.getSections( 'left', function( sections )
        {
            _this.leftColumn.sections = sections;
            _this.leftColumn.render();
        } );
        
        manager.getSections( 'right', function( sections )
        {
            _this.rightColumn.sections = sections;
            _this.rightColumn.render();
        } );
    };
    
    proto.showVersion = function()
    {
        this.$version.html( Dashboard.VERSION );
    };
    
} )( window.mdash, Zepto );