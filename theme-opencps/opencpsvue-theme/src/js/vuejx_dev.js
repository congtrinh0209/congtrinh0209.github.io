/**!
 * By Binhth
 */
(function () {

    function extend(a, b) {
        for (var key in b) {
            if (b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    var VueJX = window.VueJX = function (options) {
        // Config
        extend(this.options, options);

        // Init function
        this._init();
    };

    VueJX.prototype = {
        options: {
            el: "default",
            pk: 0,
            groupid: 0,
            jxtemplate: "default",
            template: "default",
            data: "",
            schema: {}
        },

        _init: function () {

            var elDOMTEMP = document.getElementById(this.options.el);

            elDOMTEMP.innerHTML = '<v-app v-scroll="'+this.options.onScroll+'" ><v-form id="'+this.options.el+'_form" ref="form"  @submit.prevent.stop="javascript:;"></v-form>';

            var elDOM = document.getElementById(this.options.el + "_form");

            if (this.options.template === "default"){
                var jxtemplate = document.getElementById(this.options.jxtemplate);
                
                if (jxtemplate != null) {
                    jxtemplate.className = "";
                    elDOM.appendChild(jxtemplate);
                }
            } else {
                elDOM += this.options.template;
            }

            var schema = this.options.schema;
            
            var dataResult = {}, computedBuilder = {}, watchBuilder = {}, methodsBuilder = {};
            var computedBuilderG = {}, watchBuilderG = {}, methodsBuilderG = {};
            var mountedG = ' ';
            //builder schema
            var schemaBuilder = {};

            for (var key in this.options.data) {
                
                var initData = this.options.data[key];
                
                dataResult[key] = initData;

            }

            for (var key in schema) {

                var detailSchema = schema[key];

                dataResult[detailSchema.name] = null;
                dataResult[detailSchema.type] = detailSchema.type;
                dataResult['searchQueryIsDirty'] = false;
                dataResult['isCalculating'] = false;
                dataResult[detailSchema.name+"_hidden"] = false;
                dataResult[detailSchema.name+"_hidden_loading"] = false;

                var rules = '', textBuilder = ' ';

                if (detailSchema.type === 'select') {
                    dataResult[detailSchema.name] = []
                } else if (detailSchema.type === 'action') {
                    dataResult[detailSchema.name+'Items'] = []
                }
                

                if (detailSchema.hasOwnProperty("mode") && detailSchema.type !== 'select' ) {
                    dataResult[detailSchema.name+"_hidden"] = true;
                    dataResult[detailSchema.name+"_editable_value_text"] = '';

                    var editable_value_text = detailSchema.name;

                    if(detailSchema.type === 'switch' || detailSchema.type === 'checkbox'){
                        
                        watchBuilder = eval('( { '+
                                                detailSchema.name+': { '+
                                                    'handler: function(val, oldVal) { '+
                                                        'var tempEditableText = [] ; ' +
                                                        ' for (var key in val) { ' +
                                                            ' if (val.hasOwnProperty(key)) { ' +
                                                                'tempEditableText.push(val[key]) ; ' +
                                                            ' } ' +
                                                        ' } ' +
                                                        ' this.'+detailSchema.name+'_editable_value_text = tempEditableText.toString() ' +
                                                    '}' +
                                                '} '+
                                            '} )');
                        editable_value_text = detailSchema.name+"_editable_value_text";
                    } else {
                        editable_value_text = detailSchema.name;
                    }
                        
                    

                    textBuilder += '<div class="editable-wrap"> <div class="layout row wrap"> <div class="labelClass flex '+detailSchema.labelClass+'"> '+detailSchema.label+' </div> <div class="controlClass flex '+detailSchema.controlClass+'"> <span v-if="'+detailSchema.name+'_hidden" > {{'+editable_value_text+'}} </span> ';
                } else if (detailSchema.hasOwnProperty("mode") && detailSchema.type === 'select' ) {
                    dataResult[detailSchema.name+"_hidden"] = true;
                    textBuilder += '<div :class="{'+"'editable-wrap': true, " +"'editable-wrap-before-select': "+detailSchema.name+"_hidden, "+"'editable-wrap-after-select': !" + detailSchema.name + '_hidden }"> ';
                } else if (detailSchema.hasOwnProperty("filter") && detailSchema.type === 'select' ) {
                    dataResult[detailSchema.name+"_hidden"] = true;
                    textBuilder += '<div :class="{'+"'editable-wrap-filter': true, " +"'editable-wrap-before-select': "+detailSchema.name+"_hidden, "+"'editable-wrap-after-select': !" + detailSchema.name + '_hidden }"> ';
                }

                

                if (detailSchema.type === 'password' || detailSchema.type === 'text' || detailSchema.type === 'email' || detailSchema.type === 'number' || detailSchema.type === 'hidden') {
                    
                    textBuilder += '<v-text-field ';
                    
                    textBuilder += ' v-model="' + detailSchema.name + '" ' ;

                    if (detailSchema.hasOwnProperty("mode")) {
                        textBuilder += ' v-if="!' + detailSchema.name + '_hidden" ' ;
                    }

                    if (detailSchema.type === 'hidden') {
                        textBuilder += ' v-show="false"' ;
                    }

                    //password
                    if (detailSchema.type === 'password') {
                        dataResult[detailSchema.name+"_show"] = false;
                        textBuilder += ' :append-icon="' + detailSchema.name + '_show ? ' + " 'visibility' " + ' : ' + " 'visibility_off' " + ' " ' ;
                        textBuilder += ' :append-icon-cb="() => ( ' + detailSchema.name + '_show = !' + detailSchema.name + '_show)"' ;
                        textBuilder += ' :type="' + detailSchema.name + '_show ? '+"'text'"+' : '+"'password'"+'"' ;
                    }

                    if (detailSchema.hasOwnProperty("cssClass")) {
                        textBuilder += ' class="'+detailSchema.cssClass+'" ' ;
                    }

                    if (detailSchema.hasOwnProperty("append_icon")) {
                        
                        textBuilder += ' append-icon="' + detailSchema.append_icon + '" ' ;
                            
                    } else if (detailSchema.hasOwnProperty("prepend_icon")) {
                            
                        textBuilder += ' prepend-icon="' + detailSchema.prepend_icon + '" ' ;
                            
                    }

                    if (detailSchema.hasOwnProperty("required")) {

                        var messageValidatorRequired = '';

                        if (detailSchema.hasOwnProperty("required_msg")) {
                            messageValidatorRequired = detailSchema.required_msg;
                        } else {
                            messageValidatorRequired = 'This field is required! ';
                        }

                        dataResult['rules'+detailSchema.name] = {
                            required: eval(' { (v) => !!v || '+"'"+messageValidatorRequired+"'"+' } ')
                        };

                        rules = ' :rules="[rules'+detailSchema.name+'.required]" ';
                        
                        textBuilder += ' required ';

                    } 
                    
                    if (detailSchema.type === 'number') {

                        var messageErrorRequired = '';

                        if (detailSchema.hasOwnProperty("error_msg")) {
                            messageErrorRequired = detailSchema.error_msg;
                        } else {
                            messageErrorRequired = 'This field is number and not null! ';
                        }

                        var re = /^\d+$/;

                        dataResult[detailSchema.name] = "0";

                        dataResult['rules'+detailSchema.name] = {
                            required: eval(' { (v) => !!v || '+"'"+messageErrorRequired+"'"+' } '),
                            number: eval(' { (v) => '+re+'.test(v) || '+"'"+messageErrorRequired+"'"+' } ')
                        };

                        rules = ' :rules="[rules'+detailSchema.name+'.required, rules'+detailSchema.name+'.number]" ';

                    } else if (detailSchema.type === 'email') {

                        var messageErrorRequired = '';
                        
                        if (detailSchema.hasOwnProperty("error_msg")) {
                            messageErrorRequired = detailSchema.error_msg;
                        } else {
                            messageErrorRequired = 'This field is email and not null! ';
                        }

                        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                        dataResult['rules'+detailSchema.name] = {
                            required: eval(' { (v) => !!v || '+"'"+messageErrorRequired+"'"+' } '),
                            email: eval(' { (v) => '+re+'.test(v) || '+"'"+messageErrorRequired+"'"+' } ')
                        };

                        rules = ' :rules="[rules'+detailSchema.name+'.required, rules'+detailSchema.name+'.email]" ';

                    } else {

                        if (detailSchema.hasOwnProperty("min") && detailSchema.hasOwnProperty("counter")) {
                            
                            var messageValidatorMin = '';
                            var messageValidatorCounter = '';

                            if (detailSchema.hasOwnProperty("hint")) {
                                messageValidatorMin = detailSchema.hint;
                            } else {
                                messageValidatorMin = 'This field is minimum ' + detailSchema.min + " characters";
                            }

                            if (detailSchema.hasOwnProperty("counter_hint")) {
                                messageValidatorCounter = detailSchema.counter_hint;
                            } else {
                                messageValidatorCounter = 'This field is maximum ' + detailSchema.counter + " characters";
                            }
                            
                            dataResult['rules'+detailSchema.name] = {
                                required: eval(' { (v) => !!v || '+"'"+messageValidatorMin+"'"+' } '),
                                min: eval(' { (v) => v && v.length > '+detailSchema.min+' || '+"'"+messageValidatorMin+"'"+' } '),
                                counter: eval(' { (v) => v && v.length < '+detailSchema.counter+' || '+"'"+messageValidatorCounter+"'"+' } ')
                            };

                            rules = ' :rules="[rules'+detailSchema.name+'.required, rules'+detailSchema.name+'.min, rules'+detailSchema.name+'.counter]" ';
                            
                            textBuilder += ' min="' + detailSchema.min + '" ';

                            textBuilder += ' :counter="' + detailSchema.counter + '" required ';

                        } else if (detailSchema.hasOwnProperty("counter")) {
                            
                            var messageValidatorCounter = '';

                            if (detailSchema.hasOwnProperty("counter_hint")) {
                                messageValidatorCounter = detailSchema.counter_hint;
                            } else {
                                messageValidatorCounter = 'This field is maximum ' + detailSchema.counter + " characters";
                            }

                            dataResult['rules'+detailSchema.name] = {
                                counter: eval(' { (v) => v && v.length < '+detailSchema.counter+' || '+"'"+messageValidatorCounter+"'"+' } ')
                            };

                            rules = ' :rules="[rules'+detailSchema.name+'.counter]" ';

                            textBuilder += ' :counter="' + detailSchema.counter + '" ';

                        } else if (detailSchema.hasOwnProperty("min")) {


                            var messageValidatorMin = '';
                            
                            if (detailSchema.hasOwnProperty("hint")) {
                                messageValidatorMin = detailSchema.hint;
                            } else {
                                messageValidatorMin = 'This field is minimum ' + detailSchema.min + " characters";
                            }
                            var dkm = detailSchema.min;
                            
                            dataResult['rules'+detailSchema.name] = {
                                required: eval(' { (v) => !!v || '+"'"+messageValidatorMin+"'"+' } '),
                                min: eval(' { (v) => v && v.length > '+detailSchema.min+' || '+"'"+messageValidatorMin+"'"+' } ')
                            };

                            rules = ' :rules="[rules'+detailSchema.name+'.required, rules'+detailSchema.name+'.min]" ';
                            
                            textBuilder += ' min="' + detailSchema.min + '" required ';

                        }

                    }

                    if (detailSchema.hasOwnProperty("hint")) {

                        textBuilder += ' hint="' + detailSchema.hint + '" ';

                    }

                    if (detailSchema.hasOwnProperty("label")) {

                        textBuilder += ' label="' + detailSchema.label + '" ';

                    }

                    if (detailSchema.hasOwnProperty("name")) {

                        textBuilder += ' name="' + detailSchema.name + '" ';

                    }
                    
                    if (detailSchema.hasOwnProperty("autofocus") && detailSchema.autofocus) {
                        
                        textBuilder += ' autofocus ';
                        
                    }

                    if (detailSchema.hasOwnProperty("box") && detailSchema.box) {
                        
                        textBuilder += ' box ';
                        
                    }

                    if (detailSchema.hasOwnProperty("dark") && detailSchema.dark) {
                        
                        textBuilder += ' dark ';
                        
                    }

                    if (detailSchema.hasOwnProperty("light") && detailSchema.light) {
                        
                        textBuilder += ' light ';
                        
                    }
                    
                    if (detailSchema.hasOwnProperty("color")) {
                        
                        textBuilder += ' color="'+detailSchema.color+'" ';
                        
                    }

                    if (detailSchema.hasOwnProperty("disabled") && detailSchema.disabled) {
                        
                        textBuilder += ' disabled ';
                        
                    }

                    if (detailSchema.hasOwnProperty("hide_details") && detailSchema.hide_details) {
                        
                        textBuilder += ' hide-details ';
                        
                    }

                    if (detailSchema.hasOwnProperty("persistent_hint") && detailSchema.persistent_hint) {
                        
                        textBuilder += ' persistent-hint ';
                        
                    }

                    if (detailSchema.hasOwnProperty("placeholder")) {
                        
                        textBuilder += ' placeholder="'+detailSchema.placeholder+'" ';
                        
                    }

                    if (detailSchema.hasOwnProperty("readonly") &&  detailSchema.readonly) {
                        
                        textBuilder += ' readonly ';
                        
                    }

                    if (detailSchema.hasOwnProperty("validate_on_blur") &&  detailSchema.validate_on_blur) {
                        
                        textBuilder += ' validate-on-blur ';
                        
                    }

                    if (detailSchema.hasOwnProperty("multi_line") &&  detailSchema.multi_line) {
                        
                        textBuilder += ' multi-line ';
                        
                    }

                    if (detailSchema.hasOwnProperty("textarea") &&  detailSchema.textarea) {
                        
                        textBuilder += ' textarea ';
                        
                    }

                    if (detailSchema.hasOwnProperty("rows")) {
                        
                        textBuilder += ' rows="'+detailSchema.rows+'" ';
                        
                    }
                    
                    if (detailSchema.hasOwnProperty("single_line") &&  detailSchema.single_line) {
                        
                        textBuilder += ' single-line ';
                        
                    }

                    if (detailSchema.hasOwnProperty("solo") &&  detailSchema.solo) {
                        
                        textBuilder += ' solo ';
                        
                    }

                    if (detailSchema.hasOwnProperty("auto_grow") &&  detailSchema.auto_grow) {
                        
                        textBuilder += ' auto-grow ';
                        
                    }

                    if (detailSchema.hasOwnProperty("mask")) {
                        
                        textBuilder += ' mask="' + detailSchema.mask + '" ';
                        
                    }

                    if (detailSchema.hasOwnProperty("return_masked_value") &&  detailSchema.return_masked_value) {
                        
                        textBuilder += ' return-masked-value ';
                        
                    }

                    if (detailSchema.hasOwnProperty("dont_fill_mask_blanks") &&  detailSchema.dont_fill_mask_blanks) {
                        
                        textBuilder += ' dont-fill-mask-blanks ';
                        
                    }
                    
                    if (detailSchema.hasOwnProperty("full_width") &&  detailSchema.full_width) {
                        
                        textBuilder += ' full-width ';
                        
                    }

                    if (detailSchema.hasOwnProperty("tabindex")) {
                        
                        textBuilder += ' tabindex="' + detailSchema.tabindex + '" ';
                        
                    }

                    if (detailSchema.hasOwnProperty("toggle_keys")) {
                        
                        textBuilder += ' toggle-keys="' + detailSchema.toggle_keys + '" ';
                        
                    }

                    if (detailSchema.hasOwnProperty("prefix")) {
                        
                        textBuilder += ' prefix="' + detailSchema.prefix + '" ';
                        
                    }

                    if (detailSchema.hasOwnProperty("suffix")) {
                        
                        textBuilder += ' suffix="' + detailSchema.suffix + '" ';
                        
                    }

                    if (detailSchema.hasOwnProperty("error") && detailSchema.error) {
                        
                        textBuilder += ' error ';
                        
                    }

                    if (detailSchema.hasOwnProperty("error_messages")) {
                        
                        textBuilder += ' error-messages="' + detailSchema.error_messages + '" ';
                        
                    }

                    textBuilder += '  ';

                    var eventTextBuilder = ' ';

                    if ( detailSchema.hasOwnProperty("onClick") ) {
                        eventTextBuilder += ' v-on:click.native=' + detailSchema.onClick;
                    }

                    if ( detailSchema.hasOwnProperty("onChange") ) {
                        eventTextBuilder += ' v-on:change.native=' + detailSchema.onChange;
                    }

                    if ( detailSchema.hasOwnProperty("onKeyup") ) {
                        eventTextBuilder += ' @keyup.native=' + detailSchema.onKeyup;
                    }

                    if ( detailSchema.hasOwnProperty("onEnter") ) {
                        eventTextBuilder += ' @@keyup.enter=' + detailSchema.onEnter;
                    }

                    textBuilder += rules + ' '+eventTextBuilder+' ></v-text-field> ';
                    
                    if (detailSchema.hasOwnProperty("indicator") && detailSchema.indicator) {
                        
                        textBuilder += '<small class="jx-indicator">{{ '+"searchIndicator"+detailSchema.name+' }}</small>';

                    }

                } else if (detailSchema.type === 'time' || detailSchema.type === 'date' || detailSchema.type === 'month'){
                    //date time
                    
                    dataResult['modal'+detailSchema.name] = "";

                    textBuilder += ' <v-menu lazy offset-y :close-on-content-click="true" transition="scale-transition" full-width max-width="290px" min-width="290px" ';
                    if (detailSchema.hasOwnProperty("mode")) {
                        textBuilder += ' v-if="!' + detailSchema.name + '_hidden" ' ;
                    }
                    textBuilder += ' v-model="modal' + detailSchema.name + '" > ' ;
                    
                    //input
                    textBuilder += ' <v-text-field slot="activator" ' ;

                    

                    if (detailSchema.hasOwnProperty("required")) {
                        
                        var messageValidatorRequired = '';

                        if (detailSchema.hasOwnProperty("required_msg")) {
                            messageValidatorRequired = detailSchema.required_msg;
                        } else {
                            messageValidatorRequired = 'This field is required! ';
                        }

                        dataResult['rules' + detailSchema.name] = {
                            required: eval(' { (v) => !!v || ' + "'" + messageValidatorRequired + "'" + ' } ')
                        };
                        
                        rules = ' :rules="[rules' + detailSchema.name+'.required]" ';

                        textBuilder += ' required ';

                    }

                    if (detailSchema.hasOwnProperty("date_format")) {
                        
                        textBuilder += ' v-model="' + detailSchema.name + 'Formatted" ' ;

                    } else {
                        textBuilder += ' v-model="' + detailSchema.name + '" ' ;
                    }

                    

                    if (detailSchema.hasOwnProperty("label")) {
                        
                        textBuilder += ' label="' + detailSchema.label + '" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("append_icon")) {
                        
                        textBuilder += ' append-icon="' + detailSchema.append_icon + '" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("prepend_icon")) {
                        
                        textBuilder += ' prepend-icon="' + detailSchema.prepend_icon + '" ' ;
                        
                    }
                    
                    if (detailSchema.hasOwnProperty("date_format")) {
                        
                        dataResult[detailSchema.name+'Formatted'] = "";
                        
                        textBuilder += ' @blur="'+detailSchema.name+' = parseDate'+detailSchema.name+'(this.'+detailSchema.name+'Formatted'+')" ' ;
                        
                    }

                    textBuilder += ' '+rules+' ></v-text-field> ' ;
                        
                    if (detailSchema.type === 'time') {
                        
                        textBuilder += ' <v-time-picker v-model="' + detailSchema.name + '" autosave ' ;
                    
                    } else if (detailSchema.type === 'date') {

                        textBuilder += ' <v-date-picker required v-model="' + detailSchema.name + '" autosave ' ;

                    } else if (detailSchema.type === 'month') {
                        
                        textBuilder += ' <v-date-picker type="month" v-model="' + detailSchema.name + '" autosave ' ;
                        
                    }
                    
                    if (detailSchema.hasOwnProperty("format")) {
                        
                        textBuilder += ' format="'+detailSchema.format+')" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("color")) {
                        
                        textBuilder += ' color="' + detailSchema.color + '" > ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("header_color")) {
                        
                        textBuilder += ' header-color="' + detailSchema.header_color + '" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("dark") && detailSchema.dark) {
                        
                        textBuilder += ' dark ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("light") && detailSchema.light) {
                        
                        textBuilder += ' light ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("locale")) {
                        
                        textBuilder += ' locale="' + detailSchema.locale + '" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("no_title") && detailSchema.no_title) {
                        
                        textBuilder += ' no-title ' ;
                        
                    }
                    
                    if (detailSchema.hasOwnProperty("year_icon")) {
                        
                        textBuilder += ' year-icon="' + detailSchema.year_icon + '" ' ;
                        
                    }
                    
                    if (detailSchema.hasOwnProperty("date_format")) {

                        textBuilder += ' @input="'+detailSchema.name+'Formatted'+' = formatDate'+detailSchema.name+'($event)" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("allowed_dates") && detailSchema.type !== 'time') {
                        
                        dataResult[detailSchema.allowed_dates] = {
                            min: null,
                            max: null
                        };

                        textBuilder += ' :allowed-dates="' + detailSchema.allowed_dates + '" ';

                    } else {
                        dataResult[detailSchema.allowed_dates] = {
                            hours: {
                                min: 0,
                                max: 24
                            },
                            minutes: {
                                min: 0,
                                max: 60
                            }
                        };

                        textBuilder += ' :allowed-hours="' + detailSchema.allowed_dates + '.hours" ';
                        textBuilder += ' :allowed-minutes="' + detailSchema.allowed_dates + '.minutes" ';
                    }
                    
                    if (detailSchema.hasOwnProperty("onClick")) {
                        textBuilder += ' v-on:click.native=' + detailSchema.onClick;
                    }
                    
                    textBuilder += '  ';

                    if (detailSchema.type === 'time') {
                        
                        textBuilder += ' ></v-time-picker> </v-menu> ';
                    
                    } else {
                        
                        textBuilder += ' ></v-date-picker> </v-menu> ';
                        
                    }
                    
                }  else if (detailSchema.type === 'timeview' || detailSchema.type === 'dateview' || detailSchema.type === 'monthview'){
                    //date time
                        
                    if (detailSchema.type === 'timeview') {
                        
                        textBuilder += ' <v-time-picker v-model="' + detailSchema.name + '" autosave ' ;
                    
                    } else if (detailSchema.type === 'dateview') {

                        textBuilder += ' <v-date-picker v-model="' + detailSchema.name + '" autosave ' ;

                    } else if (detailSchema.type === 'monthview') {
                        
                        textBuilder += ' <v-date-picker type="month" v-model="' + detailSchema.name + '" autosave ' ;
                        
                    }
                    
                    if (detailSchema.hasOwnProperty("format")) {
                        
                        textBuilder += ' format="'+detailSchema.format+')" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("color")) {
                        
                        textBuilder += ' color="' + detailSchema.color + '" > ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("header_color")) {
                        
                        textBuilder += ' header-color="' + detailSchema.header_color + '" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("dark") && detailSchema.dark) {
                        
                        textBuilder += ' dark ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("light") && detailSchema.light) {
                        
                        textBuilder += ' light ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("locale")) {
                        
                        textBuilder += ' locale="' + detailSchema.locale + '" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("no_title") && detailSchema.no_title) {
                        
                        textBuilder += ' no-title ' ;
                        
                    }
                    
                    if (detailSchema.hasOwnProperty("year_icon")) {
                        
                        textBuilder += ' year-icon="' + detailSchema.year_icon + '" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("allowed_dates") && detailSchema.type !== 'timeview') {

                        dataResult[detailSchema.allowed_dates] = {
                            min: null,
                            max: null
                        };

                        textBuilder += ' :allowed-dates="' + detailSchema.allowed_dates + '" ';

                    } else {
                        dataResult[detailSchema.allowed_dates] = {
                            hours: {
                              min: 0,
                              max: 24
                            },
                            minutes: {
                              min: 0,
                              max: 60
                            }
                          };

                        textBuilder += ' :allowed-hours="' + detailSchema.allowed_dates + '.hours" ';
                        textBuilder += ' :allowed-minutes="' + detailSchema.allowed_dates + '.minutes" ';
                    }

                    var eventDateTimeBuilder;

                    if (detailSchema.hasOwnProperty("onClick")) {
                        eventDateTimeBuilder += ' v-on:click.native="' + detailSchema.onClick + '"';
                    }

                    textBuilder += ' ' + eventDateTimeBuilder + ' ';

                    if (detailSchema.type === 'timeview') {
                        
                        textBuilder += ' ></v-time-picker> ';
                    
                    } else {
                        
                        textBuilder += ' ></v-date-picker> ';
                        
                    }
                    
                } else if (detailSchema.type === 'slider'){
                        
                    textBuilder += ' <v-slider v-model="' + detailSchema.name + '" thumb-label ticks ';
                    
                    if (detailSchema.hasOwnProperty("step")) {
                        
                        textBuilder += ' step="' + detailSchema.step + '" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("label")) {
                        
                        textBuilder += ' label="'+detailSchema.label+'" ' ;
                                                
                    }

                    if (detailSchema.hasOwnProperty("color")) {
                        
                        textBuilder += ' color="'+detailSchema.color+'" ' ;
                                                
                    }

                    if (detailSchema.hasOwnProperty("track_color")) {
                        
                        textBuilder += ' track-color="'+detailSchema.track_color+'" ' ;
                                                
                    }

                    if (detailSchema.hasOwnProperty("thumb_color")) {
                        
                        textBuilder += ' thumb-color="'+detailSchema.thumb_color+'" ' ;
                                                
                    }

                    if (detailSchema.hasOwnProperty("input")) {
                        
                        textBuilder += ' @input="'+detailSchema.input+'" ' ;
                                                
                    } else if (!detailSchema.hasOwnProperty("input") && detailSchema.hasOwnProperty("updateapi")) {
                        
                        textBuilder += ' @input="'+detailSchema.name+'UpdateAPIFnc" ' ;
                                                
                    }
                    
                    textBuilder += ' ></v-slider> ';
                    
                }   else if (detailSchema.type === 'rating'){
                    
                    textBuilder += ' <jx-rate v-model="'+detailSchema.name+'" show-text ';

                    if (detailSchema.hasOwnProperty('ratings')) {
                        dataResult[detailSchema.ratings] = [];
                        textBuilder += ' :ratings="'+detailSchema.ratings+'" ';
                    }
                    
                    if (detailSchema.hasOwnProperty('call_back_success')) {
                        textBuilder += ' @call-back-success="'+detailSchema.call_back_success+'" ';
                    }

                    if (detailSchema.hasOwnProperty('call_back_error')) {
                        textBuilder += ' @call-back-error="'+detailSchema.call_back_error+'" ';
                    }

                    if (detailSchema.hasOwnProperty('show_text') && detailSchema.show_text) {
                        textBuilder += ' show-text ';
                    }

                    if (detailSchema.hasOwnProperty('updateapi')) {
                        dataResult[detailSchema.name+"updateapi"] = [detailSchema.updateapi];
                        textBuilder += ' :updateapi="'+detailSchema.name+"updateapi"+'" ';
                    }

                    textBuilder += ' :pk="'+this.options.pk+'" ';

                    textBuilder += ' :groupid="'+this.options.groupid+'" ';

                    textBuilder += ' ></jx-rate> ';
                    
                }   else if (detailSchema.type === 'select'){
                    
                    dataResult[detailSchema.name+"_keywords"] = [detailSchema.updateapi];

                    var eventSelectBuilder = ' ';

                    textBuilder += ' <v-select v-model="' + detailSchema.name + '"';
                    
                    if (detailSchema.hasOwnProperty("required")) {
                        
                        var messageValidatorRequired = '';

                        if (detailSchema.hasOwnProperty("required_msg")) {
                            messageValidatorRequired = detailSchema.required_msg;
                        } else {
                            messageValidatorRequired = 'This field is required! ';
                        }

                        dataResult['rules' + detailSchema.name] = {
                            required: eval(' { (v) => !!v || ' + "'" + messageValidatorRequired + "'" + ' } ')
                        };
                        
                        rules = ' :rules="[rules' + detailSchema.name+'.required]" ';

                        textBuilder += ' required ';

                    }
                    
                    if (detailSchema.hasOwnProperty("items")) {
                        
                        dataResult[detailSchema.name+'Items'] = detailSchema.items;

                        textBuilder += ' v-bind:items="this.'+detailSchema.name+'Items" ' ;
                                                
                    }

                    if (detailSchema.hasOwnProperty("item_text")) {
                        
                        textBuilder += ' item-text="' + detailSchema.item_text + '" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("item_value")) {
                        
                        textBuilder += ' item-value="' + detailSchema.item_value + '" ' ;
                        
                    }

                    if (detailSchema.hasOwnProperty("tags") && detailSchema.tags) {
                        
                        textBuilder += ' tags ' ;

                        textBuilder += ' @input="'+detailSchema.name+'InputEvent()" ' ;
                        
                    }
                    if (detailSchema.hasOwnProperty("label")) {

                        textBuilder += ' label="' + detailSchema.label + '" ';

                    }

                    if (detailSchema.hasOwnProperty("append_icon")) {

                        textBuilder += ' append-icon="' + detailSchema.append_icon + '" ';

                    }

                    if (detailSchema.hasOwnProperty("prepend_icon")) {

                        textBuilder += ' prepend-icon="' + detailSchema.prepend_icon + '" ';

                    }

                    if (detailSchema.hasOwnProperty("chips") && detailSchema.chips) {

                        textBuilder += ' chips ';

                    }

                    if (detailSchema.hasOwnProperty("multiple") && detailSchema.multiple) {

                        textBuilder += ' multiple ';

                    }

                    if (detailSchema.hasOwnProperty("color") ) {
                        
                        textBuilder += ' color="'+detailSchema.color+'" ';

                    }
                    
                    if (detailSchema.hasOwnProperty("combobox") && detailSchema.combobox) {
                        
                        textBuilder += ' combobox ';

                    }                     

                    if (detailSchema.hasOwnProperty("onClick")) {
                        eventSelectBuilder += ' v-on:click.native=' + detailSchema.onClick;
                    }

                    if (detailSchema.hasOwnProperty("onChange")) {
                        eventSelectBuilder += ' @change=' + detailSchema.onChange;
                    }

                    if (detailSchema.hasOwnProperty("onKeyup")) {
                        eventSelectBuilder += ' @keyup.native=' + detailSchema.onKeyup;
                    }
                    
                    if (detailSchema.hasOwnProperty("dark") && detailSchema.dark) {
                        
                        textBuilder += ' dark ';

                    }  
                    if (detailSchema.hasOwnProperty("light") && detailSchema.light) {
                        
                        textBuilder += ' dark ';

                    }  
                    if (detailSchema.hasOwnProperty("hide_selected") && detailSchema.hide_selected) {
                        
                        textBuilder += ' hide-selected ';

                    } 
                    if (detailSchema.hasOwnProperty("hint")) {
                        
                        textBuilder += ' hint='+"'"+detailSchema.hint+"'"+'';

                    }   
                    
                    if (detailSchema.hasOwnProperty("loading") && detailSchema.loading) {
                        
                        textBuilder += ' loading ';

                    }   

                    if (detailSchema.hasOwnProperty("no_data_text")) {
                        
                        textBuilder += ' no-data-text='+"'"+detailSchema.no_data_text+"'"+' ';

                    } 
                    
                    if (detailSchema.hasOwnProperty("single_line") && detailSchema.single_line) {
                        
                        textBuilder += ' single-line ';

                    } 
                    
                    if (detailSchema.hasOwnProperty("solo") && detailSchema.solo) {
                        
                        textBuilder += ' solo ';

                    } 

                    if (detailSchema.hasOwnProperty("tabindex")) {
                        
                        textBuilder += ' tabindex='+"'"+detailSchema.tabindex+"'"+' ';

                    } 
                    
                    textBuilder +=  ' '+rules+' ' + eventSelectBuilder +' autocomplete return-object >';
                    
                    if (detailSchema.hasOwnProperty("chips") && detailSchema.chips) {
                        
                        textBuilder += ' <template slot="selection" slot-scope="data"> ' ;

                        textBuilder += ' <v-chip :selected="data.selected" :disabled="data.disabled" class="chip--select-multi" :key="JSON.stringify(data.item)" ' ;
                       
                        if(detailSchema.hasOwnProperty("deletable_chips") && detailSchema.deletable_chips){
                            textBuilder += ' close ';
                        }
                        textBuilder += ' @click="'+detailSchema.onRemove+'(data.item)" ' ;
                        textBuilder += ' @input="data.parent.selectItem(data.item)" ' ;
                        
                        textBuilder += ' >';
                        
                        textBuilder += ' {{ data.item.'+detailSchema.item_text+' }} ';

                        textBuilder += '</v-chip> ' ;

                        textBuilder += ' </template> ' ;
                        
                    }

                    textBuilder += '</v-select> ';
                    
                } else if (detailSchema.type === 'switch' || detailSchema.type === 'checkbox' || detailSchema.type === 'radio'){
                    var eventSwitchBuilder = ' ';

                    if (detailSchema.hasOwnProperty("label")) {
                        
                        var switch_inline = '';

                        if (detailSchema.hasOwnProperty("switch_inline") && detailSchema.switch_inline) {
                            switch_inline += ' input-group--switch_inline ';
                        }

                        if (!detailSchema.hasOwnProperty("labelClass") && !detailSchema.hasOwnProperty("controlClass")){
                            switch_inline += ' input-group--full_label ';
                        }

                        textBuilder += ' <div v-if="!'+detailSchema.name+'_hidden" class="layout row wrap '+switch_inline+' "> ';
                        
                        if(!detailSchema.hasOwnProperty("mode")){
                            textBuilder += ' <div class="flex switch-label '+detailSchema.labelClass+'"> <label class="switch-middle">'+detailSchema.label+'</label> ';
                            textBuilder += ' </div> <div class="flex switch-control '+detailSchema.controlClass+'"> ';
                        }
                        if (detailSchema.hasOwnProperty("items")) {

                            dataResult[detailSchema.name+'Items'] = detailSchema.items;
                            dataResult[detailSchema.name+'loadingGroup'] = false;
                            var cssClass = '';

                            if ( detailSchema.hasOwnProperty("cssClass") ) {
                                cssClass +=  detailSchema.cssClass;
                            }

                            if(detailSchema.type === 'radio'){
                                textBuilder += '<v-radio-group v-model="' + detailSchema.name + '" ';
                                textBuilder += ' :class="{'+"'input-group--hide-details'"+': '+(detailSchema.hasOwnProperty("hide_details") && detailSchema.hide_details)+', '+"'rating_process'"+': '+detailSchema.name+'loadingGroup }" ';
                                textBuilder += ' > ';
                            }

                            for (var key in detailSchema.items) {

                                if (detailSchema.hasOwnProperty("switch_right") && detailSchema.switch_right && !detailSchema.switch_inline) {
                                    cssClass += ' input-group--selection-controls__container__right ';
                                } else if (detailSchema.hasOwnProperty("switch_right") && detailSchema.switch_right && detailSchema.type == 'checkbox') {
                                    cssClass += ' input-group--selection-controls__container__right ';
                                }

                                if(detailSchema.type === 'checkbox'){
                                    textBuilder += '<v-checkbox ';
                                    textBuilder += ' v-model='+"'"+detailSchema.name+"'"+' ';
                                    textBuilder += ' :class="{'+"'rating_process'"+': '+detailSchema.name+'loadingGroup }" ';
                                } else if(detailSchema.type === 'radio'){
                                    textBuilder += '<v-radio ';
                                } else {
                                    textBuilder += '<v-switch ';
                                    textBuilder += ' v-model='+"'"+detailSchema.name+"'"+' ';
                                    textBuilder += ' :class="{'+"'rating_process'"+': '+detailSchema.name+'loadingGroup }" ';
                                }

                                if (detailSchema.hasOwnProperty("hide_details") && detailSchema.hide_details){
                                    textBuilder += ' hide-details ';
                                }

                                textBuilder += ' class='+"'"+cssClass+"'"+' ';

                                textBuilder += ' color=' + "'" + detailSchema.items[key].color + "'" + ' ';

                                textBuilder += ' value=' + "'" + detailSchema.items[key].value + "'" + ' ';

                                textBuilder += ' label=' + "'" + detailSchema.items[key].label + "'" + ' ';

                                if (detailSchema.hasOwnProperty("tabindex")) {
                                    textBuilder += ' tabindex=' + "'" + detailSchema.tabindex + "'" + ' ';
                                }

                                if (detailSchema.hasOwnProperty("append_icon")) {
                                    textBuilder += ' append-icon="' + detailSchema.append_icon + '" ';
                                }

                                if (detailSchema.hasOwnProperty("prepend_icon")) {
                                    textBuilder += ' prepend-icon="' + detailSchema.prepend_icon + '" ';
                                }

                                if (detailSchema.hasOwnProperty("dark") && detailSchema.dark) {
                                    
                                    textBuilder += ' dark ';
                                    
                                }
            
                                if (detailSchema.hasOwnProperty("light") && detailSchema.light) {
                                    
                                    textBuilder += ' light ';
                                    
                                }
                                
                                if(detailSchema.type === 'radio' && detailSchema.hasOwnProperty("onChange") ){
                                    eventSwitchBuilder = ' v-on:click.native=' + detailSchema.onChange;
                                } else if ( detailSchema.type != 'radio' && detailSchema.hasOwnProperty("onChange") ) {
                                    eventSwitchBuilder = ' @change=' + detailSchema.onChange;
                                }

                                if (detailSchema.hasOwnProperty('updateapi') && !(detailSchema.hasOwnProperty('mode') && detailSchema.mode)) {
                                    dataResult[detailSchema.name+"updateapi"] = [detailSchema.updateapi];
                                    if(detailSchema.type === 'radio'){
                                        textBuilder += ' v-on:click.native="'+detailSchema.name+"UpdateAPIFnc"+'" ';
                                    } else if ( detailSchema.type != 'radio') {
                                        textBuilder += ' @change="'+detailSchema.name+"UpdateAPIFnc"+'" ';
                                    }
                                }

                                if(detailSchema.type === 'checkbox'){
                                    textBuilder += ' ' + eventSwitchBuilder + ' hide-details ></v-checkbox> ';
                                } else if(detailSchema.type === 'radio'){
                                    textBuilder += ' ' + eventSwitchBuilder + ' hide-details ></v-radio> ';
                                } else {
                                    textBuilder += ' ' + eventSwitchBuilder + ' hide-details ></v-switch> ';
                                }

                            }

                            if(detailSchema.type === 'radio'){
                                textBuilder += '</v-radio-group>';
                            }

                        }

                        if(!detailSchema.hasOwnProperty("mode")){
                            textBuilder += ' </div> ';
                        }
                        
                        textBuilder += ' </div> ';
                        
                    } else {
                        var switch_inline = '';

                        if (detailSchema.hasOwnProperty("switch_inline") && detailSchema.switch_inline) {
                            switch_inline += ' input-group--switch_inline ';
                        }

                        if (detailSchema.hasOwnProperty("items")) {

                            dataResult[detailSchema.name + 'Items'] = detailSchema.items;
                            dataResult[detailSchema.name + 'loadingGroup'] = false;
                            var cssClass = '';

                            if (detailSchema.hasOwnProperty("cssClass")) {
                                cssClass += detailSchema.cssClass;
                            }

                            if (detailSchema.type === 'radio') {
                                textBuilder += '<v-radio-group v-model="' + detailSchema.name + '" ';
                                textBuilder += ' :class="{' + "'input-group--hide-details'" + ': ' + (detailSchema.hasOwnProperty("hide_details") && detailSchema.hide_details) + ', ' + "'rating_process'" + ': ' + detailSchema.name + 'loadingGroup }" ';
                                textBuilder += ' > ';
                            }

                            for (var key in detailSchema.items) {

                                if (detailSchema.hasOwnProperty("switch_right") && detailSchema.switch_right && !detailSchema.switch_inline) {
                                    cssClass += ' input-group--selection-controls__container__right ';
                                } else if (detailSchema.hasOwnProperty("switch_right") && detailSchema.switch_right && detailSchema.type == 'checkbox') {
                                    cssClass += ' input-group--selection-controls__container__right ';
                                }

                                if (detailSchema.type === 'checkbox') {
                                    textBuilder += '<v-checkbox ';
                                    textBuilder += ' v-model=' + "'" + detailSchema.name + "'" + ' ';
                                    textBuilder += ' :class="{' + "'rating_process'" + ': ' + detailSchema.name + 'loadingGroup }" ';
                                } else if (detailSchema.type === 'radio') {
                                    textBuilder += '<v-radio ';
                                } else {
                                    textBuilder += '<v-switch ';
                                    textBuilder += ' v-model=' + "'" + detailSchema.name + "'" + ' ';
                                    textBuilder += ' :class="{' + "'rating_process'" + ': ' + detailSchema.name + 'loadingGroup }" ';
                                }

                                if (detailSchema.hasOwnProperty("hide_details") && detailSchema.hide_details) {
                                    textBuilder += ' hide-details ';
                                }

                                textBuilder += ' class=' + "'" + cssClass + "'" + ' ';

                                textBuilder += ' color=' + "'" + detailSchema.items[key].color + "'" + ' ';

                                textBuilder += ' value=' + "'" + detailSchema.items[key].value + "'" + ' ';

                                textBuilder += ' label=' + "'" + detailSchema.items[key].label + "'" + ' ';

                                if (detailSchema.hasOwnProperty("tabindex")) {
                                    textBuilder += ' tabindex=' + "'" + detailSchema.tabindex + "'" + ' ';
                                }

                                if (detailSchema.hasOwnProperty("append_icon")) {
                                    textBuilder += ' append-icon="' + detailSchema.append_icon + '" ';
                                }

                                if (detailSchema.hasOwnProperty("prepend_icon")) {
                                    textBuilder += ' prepend-icon="' + detailSchema.prepend_icon + '" ';
                                }

                                if (detailSchema.hasOwnProperty("dark") && detailSchema.dark) {

                                    textBuilder += ' dark ';

                                }

                                if (detailSchema.hasOwnProperty("light") && detailSchema.light) {

                                    textBuilder += ' light ';

                                }

                                if (detailSchema.type === 'radio' && detailSchema.hasOwnProperty("onChange")) {
                                    eventSwitchBuilder = ' v-on:click.native=' + detailSchema.onChange;
                                } else if (detailSchema.type != 'radio' && detailSchema.hasOwnProperty("onChange")) {
                                    eventSwitchBuilder = ' @change=' + detailSchema.onChange;
                                }

                                if (detailSchema.hasOwnProperty('updateapi') && !(detailSchema.hasOwnProperty('mode') && detailSchema.mode)) {
                                    dataResult[detailSchema.name + "updateapi"] = [detailSchema.updateapi];
                                    if (detailSchema.type === 'radio') {
                                        textBuilder += ' v-on:click.native="' + detailSchema.name + "UpdateAPIFnc" + '" ';
                                    } else if (detailSchema.type != 'radio') {
                                        textBuilder += ' @change="' + detailSchema.name + "UpdateAPIFnc" + '" ';
                                    }
                                }

                                if (detailSchema.type === 'checkbox') {
                                    textBuilder += ' ' + eventSwitchBuilder + ' hide-details ></v-checkbox> ';
                                } else if (detailSchema.type === 'radio') {
                                    textBuilder += ' ' + eventSwitchBuilder + ' hide-details ></v-radio> ';
                                } else {
                                    textBuilder += ' ' + eventSwitchBuilder + ' hide-details ></v-switch> ';
                                }

                            }

                            if (detailSchema.type === 'radio') {
                                textBuilder += '</v-radio-group>';
                            }

                        }

                    }
                } else if(detailSchema.type === 'treeview'){

                    this.options.treeview = true;

                    dataResult[detailSchema.newdatatree] = {};
                    dataResult[detailSchema.datatree] = {};

                    textBuilder += '<vue-tree-list :model="'+detailSchema.datatree+'" ';

                    if(detailSchema.hasOwnProperty("tree_view_add")){
                        textBuilder += ' @tree-view-add="'+detailSchema.tree_view_add+'" ';
                    }

                    if(detailSchema.hasOwnProperty("tree_view_edit")){
                        textBuilder += ' @tree-view-edit="'+detailSchema.tree_view_edit+'" ';
                    }

                    if(detailSchema.hasOwnProperty("tree_view_edit_leaf")){
                        textBuilder += ' @tree-view-edit-leaf="'+detailSchema.tree_view_edit_leaf+'" ';
                    }
                    
                    //remove
                    if(detailSchema.hasOwnProperty("tree_view_remove_leaf")){
                        textBuilder += ' @tree-view-remove-leaf="'+detailSchema.tree_view_remove_leaf+'" ';
                    }
                    if(detailSchema.hasOwnProperty("tree_view_remove_root")){
                        textBuilder += ' @tree-view-remove-root="'+detailSchema.tree_view_remove_root+'" ';
                    }
                    if(detailSchema.hasOwnProperty("tree_view_remove_group")){
                        textBuilder += ' @tree-view-remove-group="'+detailSchema.tree_view_remove_group+'" ';
                    }
                    if(detailSchema.hasOwnProperty("tree_view_remove_item_group")){
                        textBuilder += ' @tree-view-remove-item-group="'+detailSchema.tree_view_remove_item_group+'" ';
                    }
                    

                    //add leaf
                    if(detailSchema.hasOwnProperty("tree_view_add_leaf")){
                        textBuilder += ' @tree-view-add-leaf="'+detailSchema.tree_view_add_leaf+'" ';
                    }
                    if(detailSchema.hasOwnProperty("tree_view_add_root_leaf")){
                        textBuilder += ' @tree-view-add-root-leaf="'+detailSchema.tree_view_add_root_leaf+'" ';
                    }
                    if(detailSchema.hasOwnProperty("tree_view_pick_leaf")){
                        textBuilder += ' @tree-view-pick-leaf="'+detailSchema.tree_view_pick_leaf+'" ';
                    }
                    
                    //drap inbox
                    if(detailSchema.hasOwnProperty("tree_view_drap_inbox")){
                        textBuilder += ' @tree-view-drap-inbox="'+detailSchema.tree_view_drap_inbox+'" ';
                    }
                    
                    // add group
                    if(detailSchema.hasOwnProperty("tree_view_edit_group")){
                        textBuilder += ' @tree-view-edit-group="'+detailSchema.tree_view_edit_group+'" ';
                    }
                    if(detailSchema.hasOwnProperty("tree_view_edit_root")){
                        textBuilder += ' @tree-view-edit-root="'+detailSchema.tree_view_edit_root+'" ';
                    }
                    

                    textBuilder += ' ></vue-tree-list>';
                } else if(detailSchema.type === 'dialog'){
                    
                    

                    dataResult[this.options.el + 'Title'] = 'Thêm mới, cập nhật thông tin.';

                    var dialogType = 'fullscreen';

                    if(detailSchema.hasOwnProperty("type_dialog")){
                        dialogType = detailSchema.type_dialog;
                    }

                    textBuilder += ' <v-dialog v-model="'+detailSchema.name + '" '+dialogType+' transition="fade-transition" :overlay=false> <v-card> ';

                    textBuilder += ' <v-toolbar dark ';

                    if (detailSchema.hasOwnProperty("color")) {
                        textBuilder += 'color="primary"';
                    }

                    textBuilder += '>';

                    textBuilder += ' <v-btn icon @click.prevent.stop="'+detailSchema.name+'Close" dark :loading="'+detailSchema.name+'_hidden_loading" :disabled="'+detailSchema.name+'_hidden_loading" > <v-icon>close</v-icon> </v-btn> <v-toolbar-title>{{'+this.options.el+'Title}}</v-toolbar-title><v-spacer></v-spacer><v-toolbar-items>';

                    textBuilder += ' <v-btn dark flat @click.prevent.stop="'+detailSchema.name+'Save" :loading="'+detailSchema.name+'_hidden_loading" :disabled="'+detailSchema.name+'_hidden_loading" > <v-icon>'+detailSchema.icon_save+'</v-icon> &nbsp; '+detailSchema.label_save+'</v-btn> </v-toolbar-items> </v-toolbar> ';

                    if (this.options.template === "default"){
                        var dialogtemplate = document.getElementById(detailSchema.template);
                        dialogtemplate.className = "";
                        textBuilder += dialogtemplate.innerHTML;
                    } else {
                        textBuilder += detailSchema.template;
                    }
                    

                    textBuilder += ' </v-card> </v-dialog>';

                    if(dialogtemplate != null){
                        dialogtemplate.remove();
                    }
                } else  if(detailSchema.type === 'dialogsm'){
                    
                    

                    dataResult[this.options.el + 'Title'] = 'Thêm mới, cập nhật thông tin.';

                    textBuilder += ' <v-dialog max-width="800" v-model="'+detailSchema.name + '" transition="fade-transition" :overlay=false> <v-card> ';

                    textBuilder += ' <v-card-title class="headline">{{'+this.options.el+'Title}}</v-card-title> ';

                    textBuilder += '<v-card-text>';

                    if (this.options.template === "default"){
                        var dialogtemplate = document.getElementById(detailSchema.template);
                        dialogtemplate.className = "";
                        textBuilder += dialogtemplate.innerHTML;
                    } else {
                        textBuilder += detailSchema.template;
                    }
                   
                    textBuilder += '</v-card-text> ';
                    
                    textBuilder += '<v-card-actions> <v-spacer></v-spacer>';

                    textBuilder += ' <v-btn flat @click.native="'+detailSchema.name+'Close"> <v-icon>close</v-icon> &nbsp; Quay lại </v-btn> ';
                    textBuilder += ' <v-btn flat @click.native="'+detailSchema.name+'Save"> <v-icon>save</v-icon> &nbsp; Ghi lại</v-btn> ';

                    textBuilder += '</v-card-actions>';

                    textBuilder += ' </v-card> </v-dialog> ';

                    if(dialogtemplate != null){
                        dialogtemplate.remove();
                    }
                } else if(detailSchema.type === 'button'){
                    
                    dataResult[detailSchema.name+ 'show'] = true;

                    if(detailSchema.hasOwnProperty("show") && !detailSchema.show){
                        dataResult[detailSchema.name+ 'show'] = false;                        
                    }

                    textBuilder += ' <v-btn v-if="'+detailSchema.name+ 'show' +'" :loading="'+detailSchema.name+'_hidden_loading" :disabled="'+detailSchema.name+'_hidden_loading" color="'+detailSchema.color+'" class="'+detailSchema.cssClass+'" ';
                    
                    textBuilder += ' @click.stop.prevent="'+detailSchema.onClick+'" >';
                    if(detailSchema.hasOwnProperty("left_icon")){
                        textBuilder += ' <v-icon left dark >'+detailSchema.left_icon+'</v-icon> ';
                    }
                    
                    textBuilder += ' ' + detailSchema.label + ' ';
                    
                    if(detailSchema.hasOwnProperty("right_icon")){
                        textBuilder += ' <v-icon right dark >'+detailSchema.right_icon+'</v-icon> ';
                    }
                    textBuilder += ' </v-btn> ';
                } else if (detailSchema.type === 'navigation'){

                    dataResult[detailSchema.name+ 'view'] = true;

                    textBuilder += '<v-app> <v-layout wrap> <v-scale-transition> <v-navigation-drawer v-if="'+detailSchema.name+'view" hide-overlay light v-model="'+detailSchema.name+'" class="'+detailSchema.cssClass+'" >';

                    if (this.options.template === "default"){
                        var navigationtemplate = document.getElementById(detailSchema.template);
                        navigationtemplate.className = "";
                        textBuilder += navigationtemplate.innerHTML;
                    } else {
                        textBuilder += detailSchema.template;
                    }

                    textBuilder += '</v-navigation-drawer> </v-scale-transition>';

                    textBuilder += '<v-layout class="view jx-content">';
                    textBuilder += '<v-scale-transition>';
                    textBuilder += '<v-btn @click.stop="'+detailSchema.name+' = !'+detailSchema.name+'" v-show="!'+detailSchema.name+'" light fixed top right fab> <v-icon>menu</v-icon> </v-btn>';
                    textBuilder += '</v-scale-transition>';
                    textBuilder += '<transition name="slide-x-transition">';
                      
                    if (this.options.template === "default"){
                        var contenttemplate = document.getElementById(detailSchema.template_content);
                        contenttemplate.className = "";
                        textBuilder += contenttemplate.innerHTML;
                    } else {
                        textBuilder += detailSchema.template_content;
                    }

                    textBuilder += '</transition> </v-layout>';

                    textBuilder += '</v-layout> </v-app>';

                    if(navigationtemplate != null){
                        navigationtemplate.remove();
                    }
                    if(contenttemplate != null){
                        contenttemplate.remove();
                    }
                    
                } else if (detailSchema.type === 'listgroup'){
                    
                    dataResult[detailSchema.name+ 'selected'] = 0;
                    dataResult[detailSchema.name+ 'Items'] = [];
                    
                    textBuilder += '<v-list> <v-list-group v-for="(item, index) in '+detailSchema.name+'Items" :value="item.active" v-bind:key="item.'+detailSchema.data_title+'" >';

                    textBuilder += '<v-list-tile slot="item" @click="'+detailSchema.onClick+'(item)" >';

                    textBuilder += '<v-list-tile-action> <v-icon v-if="'+detailSchema.name+ 'selected'+' == item.id">{{ item.action_active }}</v-icon> <v-icon v-else>{{ item.action }}</v-icon> </v-list-tile-action>';

                    textBuilder += '<v-list-tile-content> <v-list-tile-title>{{ item.'+detailSchema.data_title+' }} </v-list-tile-title> <span class="status__counter" v-if="'+detailSchema.show_counter+'">{{ item.'+detailSchema.counter+' }}</span> </v-list-tile-content>';

                    textBuilder += '<v-list-tile-action v-if="item.'+detailSchema.child_items+'"> <v-icon>keyboard_arrow_down</v-icon> </v-list-tile-action>';

                    textBuilder += '</v-list-tile>';

                    textBuilder += '<v-list-tile v-for="(subItem, subIndex) in item.'+detailSchema.child_items+'"  @click="'+detailSchema.onClick+'(subItem)" ' ;
                    
                    textBuilder += " :class="+'"'+"{'list--group__header--active':  subItem."+detailSchema.data_value+" == "+detailSchema.name+"selected} "+'"'+" ";

                    textBuilder += '>';

                    // textBuilder += '<v-list-tile-action> <v-icon>{{ subItem.action }}</v-icon> </v-list-tile-action>'; list--group__header--active

                    textBuilder += '<v-list-tile-action> <v-icon v-if="subItem.'+detailSchema.data_value+' == '+detailSchema.name+ 'selected" >done</v-icon> <v-icon v-else></v-icon> </v-list-tile-action>';

                    textBuilder += '<v-list-tile-content> <v-list-tile-title> {{ subItem.'+detailSchema.data_title+' }} </v-list-tile-title>  <span class="status__counter" v-if="'+detailSchema.show_counter+'">{{ subItem.'+detailSchema.counter+' }}</span> </v-list-tile-content>';

                    textBuilder += '</v-list-tile>';

                    textBuilder += '</v-list-group> </v-list>';
                } else if (detailSchema.type === 'expansion'){
                    
                    dataResult[detailSchema.name+ 'Items'] = [];

                    textBuilder += ' <v-card> <v-expansion-panel ';

                    if(detailSchema.hasOwnProperty("expand") && detailSchema.expand){
                        textBuilder += ' expand '; 
                    }

                    textBuilder += ' ><v-expansion-panel-content ';

                    textBuilder += ' v-for="(item, index) in '+detailSchema.name+'Items" ';
                   

                    if(detailSchema.hasOwnProperty("expand") && detailSchema.expand){
                        textBuilder += ' v-bind:value="true" ';
                    }

                    textBuilder += '  > ';

                    if (this.options.template === "default"){
                        var contenttemplate = document.getElementById(detailSchema.template);
                        contenttemplate.className = "";
                        textBuilder += contenttemplate.innerHTML;
                    } else {
                        textBuilder += detailSchema.template;
                    }
                    
                    textBuilder += ' </v-expansion-panel-content></v-expansion-panel> </v-card> ';

                    if(contenttemplate != null){
                        contenttemplate.remove();
                    }

                } else if (detailSchema.type === 'expansionpanel'){
                    
                    dataResult[detailSchema.name+ 'Items'] = [];

                    textBuilder += ' <v-card> <v-expansion-panel ';

                    if(detailSchema.hasOwnProperty("expand") && detailSchema.expand){
                        textBuilder += ' expand '; 
                    }

                    textBuilder += ' ><v-expansion-panel-content class="jx-panel" ';
                    
                    if(detailSchema.hasOwnProperty("expand") && detailSchema.expand){
                        textBuilder += ' v-bind:value="true" ';
                    }

                    textBuilder += ' > ';

                    textBuilder += '<div slot="header" class="'+detailSchema.cssClass+'">'+detailSchema.label+'</div>';
                    
                    textBuilder += ' <div v-for="(item, index) in '+detailSchema.name+'Items" >';
                    
                    if (this.options.template === "default"){
                        var contenttemplate = document.getElementById(detailSchema.template);
                        contenttemplate.className = "";
                        textBuilder += contenttemplate.innerHTML;
                    } else {
                        textBuilder += detailSchema.template;
                    }
                    
                    textBuilder += ' </div> ';

                    textBuilder += ' </v-expansion-panel-content></v-expansion-panel> </v-card> ';

                    if(contenttemplate != null){
                        contenttemplate.remove();
                    }

                } else if (detailSchema.type === 'listview'){
                    
                    dataResult[detailSchema.name+ 'Items'] = [];

                    textBuilder += ' <v-card> ';

                    
                    textBuilder += ' <div v-for="(item, index) in '+detailSchema.name+'Items" >';
                    
                    if (this.options.template === "default"){
                        var contenttemplate = document.getElementById(detailSchema.template);
                        contenttemplate.className = "";
                        textBuilder += contenttemplate.innerHTML;
                    } else {
                        textBuilder += detailSchema.template;
                    }
                    
                    textBuilder += ' </div> ';

                    textBuilder += ' </v-card> ';

                    if(contenttemplate != null){
                        contenttemplate.remove();
                    }

                } else if (detailSchema.type === 'table'){
                    
                    dataResult[detailSchema.name+ 'Total'] = 0;
                    dataResult[detailSchema.name+ 'Items'] = [];
                    dataResult[detailSchema.name+ 'page'] = 1;
                    dataResult[detailSchema.name+ 'selected'] = [];
                    dataResult[detailSchema.name+ 'headers'] = [];

                    textBuilder += ' <v-data-table ';

                    textBuilder += ' v-bind:headers="'+detailSchema.name+ 'headers'+'" ';
                    
                    textBuilder += ' v-bind:items="'+detailSchema.name+ 'Items'+'" ';
                    
                    textBuilder += ' v-model="'+detailSchema.name+ 'selected'+'" ';
					
                    textBuilder += ' item-key="'+detailSchema.item_key+'" ';

                    textBuilder += ' class="elevation-1 ' +detailSchema.cssClass+ '" ';

                    textBuilder += ' hide-actions ';
                    
                    if(detailSchema.hasOwnProperty("select_all") && detailSchema.select_all){
                        textBuilder += ' select-all ';
                    }

                    if(detailSchema.hasOwnProperty("hide_headers") && detailSchema.hide_headers){
                        textBuilder += ' hide-headers ';
                    }
					
					if (detailSchema.hasOwnProperty("no_data_text")) {
                        
                        textBuilder += ' no-data-text='+"'"+detailSchema.no_data_text+"'"+' ';

                    }
                    
                    textBuilder += ' > ';

                    if (this.options.template === "default"){
                        var contenttemplate = document.getElementById(detailSchema.template);
                        contenttemplate.className = "";
                        textBuilder += contenttemplate.innerHTML.replace(/<table>/g , "")
                        .replace(/<tbody>/g , "")
                        .replace(/<tr>/g , "")
                        .replace(/<\/tr>/g , "")
                        .replace(/<\/tbody>/g , "")
                        .replace(/<\/table>/g , "");

                    } else {
                        textBuilder += detailSchema.template;
                    }


                    textBuilder += ' </v-data-table> ';

                    if(contenttemplate != null){
                        contenttemplate.remove();
                    }

                    //pagging
                    textBuilder += ' <div class="text-xs-right pt-2 btn-block"> ';
                    textBuilder += ' <v-pagination :length="'+detailSchema.name+ 'Total'+'" v-model="'+detailSchema.name+ 'page'+'" :total-visible="10" @input="'+detailSchema.pagging+ ''+'" @next="'+detailSchema.next+ ''+'" @previous="'+detailSchema.previous+ ''+'"></v-pagination> ';
                    textBuilder += ' </div> ';
                }
                
                //jx-bind template
                var templateElStage = document.querySelector('[jx-bind="'+detailSchema.name+'"]');

                if (detailSchema.hasOwnProperty("indicator") && detailSchema.indicator) {

                    templateElStage.style.position='relative';

                    computedBuilder = eval('( { '+
                                            'searchIndicator'+detailSchema.name+': function () { '+
                                                'if (this.isCalculating) { return "⟳" } '+
                                                'else if (this.searchQueryIsDirty) { return "... Typing" } '+
                                                'else { return "" } '+
                                            '} '+
                                        '} )');
                    
                    watchBuilder = eval('( { '+
                                            detailSchema.name+': function () { '+
                                                'this.searchQueryIsDirty = true; '+
                                                'this.expensiveOperation() '+
                                            '} '+
                                        '} )');
                    
                } else if (detailSchema.hasOwnProperty("date_format")) {
                    
                    methodsBuilder = eval('( { '+
                        'formatDate'+detailSchema.name+' (date) { '+
                            ' if (!date) { return null } '+
                            ' const [year, month, day] = date.split('+"'-'"+'); '+
                            ' return `'+detailSchema.date_format+'`; '+
                        '}, '+
                        ' parseDate'+detailSchema.name+' (date) { '+
                            ' if (!date) { return null } '+
                            ' const [day, month, year] = this.'+detailSchema.name+'.split('+"'/'"+'); '+
                            ' this.formatDate'+detailSchema.name+' (date); '+
                            ' return `'+detailSchema.date_parser+'`; '+
                        '}, '+
                    '} )');
                                               
                } else if (detailSchema.hasOwnProperty("tags") && detailSchema.tags) {
                    
                    methodsBuilder = eval('( { '+
                            detailSchema.name+'InputEvent: function () { '+
                            ' var data = this.'+detailSchema.name+'; '+
                            ' for(var key in data){ '+
                            ' if((typeof data[key] == "string" && data[key].length > 0)){ '+
                                ' this.'+detailSchema.name+'.push({ "'+detailSchema.item_text+'": data[key], "'+detailSchema.item_value+'": data[key] }); '+
                            ' } '+
                            ' } '+
                            ' i = this.'+detailSchema.name+'.length; '+
                            ' while (i--) { if (typeof this.'+detailSchema.name+'[i] === "string") { this.'+detailSchema.name+'.splice(i, 1); } } '+
                        '} '+
                    '} )');
                                               
                }
                
                if (detailSchema.hasOwnProperty("mode")) {

                    

                    if (detailSchema.type !== 'select'){
                        textBuilder += ' </div> </div> <v-fade-transition>';

                        textBuilder += '</v-fade-transition>';
                    }
                    
                    textBuilder += '<div class="editable-tool"> <v-fade-transition> ';

                    textBuilder += '<v-btn color="green darken-4" fab small v-if="!'+detailSchema.name+'_hidden"  @click.native="'+detailSchema.name+'UpdateEvent" :loading="'+detailSchema.name+'_hidden_loading" :disabled="'+detailSchema.name+'_hidden_loading" > <v-icon color="white">add</v-icon></v-btn></v-fade-transition> ';
                    
                    textBuilder += '<v-btn fab small @click.native="'+detailSchema.name+'TempleDataEvent" v-if="'+detailSchema.name+'_hidden"> <v-icon v-if="'+detailSchema.name+'_hidden">create</v-icon> </v-btn>';
                    textBuilder += '<v-btn fab small @click.native="'+detailSchema.name+'RolbackEvent" v-if="!'+detailSchema.name+'_hidden"> <v-icon v-if="!'+detailSchema.name+'_hidden" color="red darken-4">clear</v-icon> </v-btn>';
                    
                    textBuilder += '</div> ';
                    
                    var apiSubmitBuilder = ' var vm = this ; var validator = document.querySelector(".error--text"); ';

                    apiSubmitBuilder += ' var dataToAPI = { '+detailSchema.name+': this.'+detailSchema.name+' }; ';

                    apiSubmitBuilder += ' if(validator == null) { vm.'+detailSchema.name+'_hidden_loading = true; const config = { headers: { "groupId": '+this.options.groupid+' } }; axios.put("'+detailSchema.updateapi+'/'+this.options.pk+'", dataToAPI, config).then(function (response) { vm.snackbar'+this.options.el+' = true; vm.'+detailSchema.name+'_hidden = !vm.'+detailSchema.name+'_hidden ;  vm.'+detailSchema.name+'_hidden_loading = false; vm.snackbartext'+this.options.el+'="'+detailSchema.success_msg+'" ;';
                    
                    if (detailSchema.hasOwnProperty("call_back_success")){
                        apiSubmitBuilder += ' vm.'+detailSchema.call_back_success+'(response); ';
                    }

                    apiSubmitBuilder += '}) .catch(function (error) { ';

                    apiSubmitBuilder += ' vm.snackbareror'+this.options.el+' = true; vm.'+detailSchema.name+'_hidden_loading = false; vm.snackbartext'+this.options.el+'="'+detailSchema.error_msg+'" ; ';
                    
                    if (detailSchema.hasOwnProperty("call_back_error")){
                        apiSubmitBuilder += ' vm.'+detailSchema.call_back_error+'(error); ';
                    }

                    apiSubmitBuilder += ' }) }  ';

                    var rolbackEventBuilder = detailSchema.name+'RolbackEvent () { this.'+detailSchema.name+'_hidden = !this.'+detailSchema.name+'_hidden ; this.'+detailSchema.name+' = this.'+detailSchema.name+'_tempData;}, ';
                    if (detailSchema.type === 'select'){
                        rolbackEventBuilder = detailSchema.name+'RolbackEvent () { this.'+detailSchema.name+'_hidden = !this.'+detailSchema.name+'_hidden ; this.'+detailSchema.name+' = this.'+detailSchema.name+'_tempData;}, ';
                    }

                    var editableMethodsBuilder = eval('( { '+
                        detailSchema.name+'TempleDataEvent () { this.'+detailSchema.name+'_tempData = this.'+detailSchema.name+'; this.'+detailSchema.name+'_hidden = !this.'+detailSchema.name+'_hidden ; }, '+
                        rolbackEventBuilder +
                        detailSchema.name+'UpdateEvent () { '+apiSubmitBuilder+' }, '+
                    '} )');

                    for (var key in editableMethodsBuilder) {
                        if (editableMethodsBuilder.hasOwnProperty(key)) {
                            methodsBuilder[key] = editableMethodsBuilder[key];
                        }
                    }

                }

                if ((detailSchema.type === 'slider' || detailSchema.type === 'radio' || detailSchema.type === 'checkbox' || detailSchema.type === 'switch') && detailSchema.hasOwnProperty('updateapi') && !(detailSchema.hasOwnProperty("mode") && detailSchema.mode)){

                    var apiSliderSubmitBuilder = ' var vm = this ; vm.'+detailSchema.name+'loadingGroup = true; ';

                    apiSliderSubmitBuilder += ' var dataToAPI = { ' + detailSchema.name + ': this.' + detailSchema.name + ' }; ';

                    if (detailSchema.type === 'slider') {
                        apiSliderSubmitBuilder += ' if (vm.'+detailSchema.name+' > 0) { ';
                    }
                    apiSliderSubmitBuilder += ' const config = { headers: { "groupId": ' + this.options.groupid + ' } }; axios.put("' + detailSchema.updateapi + '/' + this.options.pk + '", dataToAPI, config).then(function (response) { vm.snackbar' + this.options.el + ' = true; vm.snackbartext' + this.options.el + '="' + detailSchema.success_msg + '" ;';

                    if (detailSchema.hasOwnProperty("call_back_success")) {
                        apiSliderSubmitBuilder += ' vm.' + detailSchema.call_back_success + '(response); ';
                    }

                    apiSliderSubmitBuilder += '}) .catch(function (error) { ';

                    apiSliderSubmitBuilder += ' vm.snackbareror' + this.options.el + ' = true; vm.snackbartext' + this.options.el + '="' + detailSchema.error_msg + '" ; ';

                    if (detailSchema.hasOwnProperty("call_back_error")) {
                        apiSliderSubmitBuilder += ' vm.' + detailSchema.call_back_error + '(error); ';
                    }

                    apiSliderSubmitBuilder += ' }); setTimeout(function () { vm.'+detailSchema.name+'loadingGroup = false }, 500) ';
                    if (detailSchema.type === 'slider') {
                        apiSliderSubmitBuilder += ' } ';
                    }
                    var sliderMethodsBuilder = eval('( { ' +
                        detailSchema.name + 'UpdateAPIFnc () { ' + apiSliderSubmitBuilder + ' }, ' +
                        '} )');

                    for (var key in sliderMethodsBuilder) {
                        if (sliderMethodsBuilder.hasOwnProperty(key)) {
                            methodsBuilder[key] = sliderMethodsBuilder[key];
                        }
                    }
                }

                if (templateElStage != null) {
                    templateElStage.innerHTML = textBuilder;
                } else {
                    elDOM.innerHTML += textBuilder;
                }

                if (detailSchema.hasOwnProperty("events")){
                    
                    var eventJX = detailSchema.events;

                    for (var key in eventJX) {
                        if (eventJX.hasOwnProperty(key)) {
                            methodsBuilder[key] = eventJX[key];
                        }
                    }
                    
                }

                //bind data 
                for (var key in computedBuilder) {
                    if (computedBuilder.hasOwnProperty(key)) {
                        computedBuilderG[key] = computedBuilder[key];
                    }
                }
                for (var key in watchBuilder) {
                    if (watchBuilder.hasOwnProperty(key)) {
                        watchBuilderG[key] = watchBuilder[key];
                    }
                }
                for (var key in methodsBuilder) {
                    if (methodsBuilder.hasOwnProperty(key)) {
                        methodsBuilderG[key] = methodsBuilder[key];
                    }
                }
                
                if ( detailSchema.hasOwnProperty("onLoad") ) {
                    mountedG += ' this.' + detailSchema.onLoad+'(); ';
                }
                
            }

            var snackbarBuiler = ' ';
            snackbarBuiler += ' <v-snackbar :timeout="2000" :top="true" :bottom="false" :right="true" :left="false" :multi-line="true" :vertical="false" v-model="snackbar'+this.options.el+'" class="snackbar-success" > ';
            snackbarBuiler += ' <v-icon flat color="white">check_circle</v-icon> {{ snackbartext'+this.options.el+' }} <v-btn flat fab mini color="white" @click.native="snackbar'+this.options.el+' = false">Tắt</v-btn> </v-snackbar> ';

            snackbarBuiler += ' <v-snackbar :timeout="2000" :top="true" :bottom="false" :right="false" :left="false" :multi-line="true" :vertical="false" v-model="snackbareror'+this.options.el+'" class="snackbar-error" > ';
            snackbarBuiler += ' <v-icon flat color="white">check_circle</v-icon> {{ snackbartext'+this.options.el+' }} <v-btn flat fab mini color="white" @click.native="snackbareror'+this.options.el+' = false">Tắt</v-btn> </v-snackbar> ';

            dataResult['snackbar'+this.options.el] = false;
            dataResult['snackbareror'+this.options.el] = false;
            dataResult['snackbartext'+this.options.el] = "Error!";

            elDOM.innerHTML += snackbarBuiler + '</v-app>';
            

            var methodsBuilderOperation = eval('( { '+
                'expensiveOperation: _.debounce(function () { '+
                    'this.isCalculating = true; '+
                    'setTimeout(function () { '+
                        'this.isCalculating = false; '+
                        'this.searchQueryIsDirty = false '+
                    '}.bind(this), 1000) }, 500), '+
                'clear () { this.$refs.form.reset() } '+
            '} )');

            for (var key in methodsBuilderOperation) {
                if (methodsBuilderOperation.hasOwnProperty(key)) {
                    methodsBuilderG[key] = methodsBuilderOperation[key];
                }
            }

            this.options.data = dataResult;
            this.options.computed = computedBuilderG;
            this.options.watch = watchBuilderG;
            this.options.methods = methodsBuilderG;
            this.options.mountedG = eval('( function () { this.$nextTick(function () { ' + mountedG + ' } ) } )');
            
        },

        _builder: function (form) {
            
            var componentsBuilder = {};

            if(this.options.treeview){
                componentsBuilder = {
                    'VueTreeList': VueTreeList.VueTreeList
                }
            }
            
            form = new Vue({
                el: '#' + this.options.el,
                data: this.options.data,
                components: componentsBuilder,
                computed: this.options.computed,
                watch: this.options.watch,
                methods: this.options.methods,
                mounted: this.options.mountedG
            });

        }

    };

}());

Vue.filter('datetime', function(value) {
    if (value) {
      var dateCur = new Date(value);
      var month = dateCur.getMonth() + 1;
      var day = dateCur.getDate() ;
      var year = dateCur.getFullYear();
      var hour = dateCur.getHours();
      var minute = dateCur.getMinutes();
      var seconds = dateCur.getSeconds();
      return day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + seconds;
    } else {
      return "Chưa cập nhật"
    }
});

Vue.filter('date', function(value) {
    if (value) {
      var dateCur = new Date(value);
      var month = dateCur.getMonth() + 1;
      var day = dateCur.getDate() ;
      var year = dateCur.getFullYear();
      return day + "/" + month + "/" + year;
    } else {
      return "Chưa cập nhật"
    }
});

Vue.filter('datetime', function(value) {
    if (value) {
      var dateCur = new Date(value);
      var month = dateCur.getMonth() + 1;
      var day = dateCur.getDate() ;
      var year = dateCur.getFullYear();
      var hour = dateCur.getHours();
      var minute = dateCur.getMinutes();
      var seconds = dateCur.getSeconds();
      return day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + seconds;
    } else {
      return "Chưa cập nhật"
    }
});

Vue.filter('datetimelog', function(value) {
    if (value) {
      var dateCur = new Date(value);
      var month = dateCur.getMonth() + 1;
      var day = dateCur.getDate() ;
      var year = dateCur.getFullYear();
      var hour = dateCur.getHours();
      var minute = dateCur.getMinutes();
      var seconds = dateCur.getSeconds();
      return hour + ":" + minute + ":" + seconds + ' | ' + day + "/" + month + "/" + year;
    } else {
      return "Chưa cập nhật"
    }
});

Vue.filter('date', function(value) {
    if (value) {
      var dateCur = new Date(value);
      var month = dateCur.getMonth() + 1;
      var day = dateCur.getDate() ;
      var year = dateCur.getFullYear();
      return day + "/" + month + "/" + year;
    } else {
      return "Chưa cập nhật"
    }
});

Vue.filter('money', function(value) {
    if (value) {
      var moneyCur = (value/1).toFixed(0).replace('.', ',');
      
      return moneyCur.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
      return "0"
    }
});

Vue.filter('paymentStatusLabel', function(value) {
    if (value === 0) {
    	return "Chờ nộp";
    } else if (value === 1) {
    	return "Chờ xác nhận";
    } else if (value === 2) {
    	return "Hoàn thành";
    } else if (value === 3) {
    	return "không hợp lệ";
    }
});

Vue.filter('paymentStatusAction', function(value) {
	if (value === 0) {
    	return "Thu phí";
    } else if (value === 1) {
    	return "Xác nhận";
    }
});

Vue.filter('registrationState', function(value) {
	if (value === 0) {
    	return "Doanh nghiệp đăng ký thông tin";
    } else if (value === 1) {
    	return "Chờ phê duyệt";
    } else if (value === 2) {
    	return "Đã xác nhận đăng ký";
    } else if (value === 3) {
    	return "Yêu cầu bổ sung";
    }
});