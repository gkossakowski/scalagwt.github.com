function $$init_156(){
}

function DefaultRule_0(){
  Object_1.call(this);
  $$init_156();
}

defineSeed(200, 1, {});
function select_0(n){
  return n == 1?1:0;
}

function $$init_157(){
}

function $select(n){
  return select_0(n);
}

function DefaultRule_en_0(){
  DefaultRule_0.call(this);
  $$init_157();
}

defineSeed(202, 200, {}, DefaultRule_en_0);
defineSeed(313, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwPluralFormsExampleArg0Label = function cwPluralFormsExampleArg0Label(){
  return '<b>Argument {0}:<\/b>';
}
;
_.cwPluralFormsExampleFormattedLabel = function cwPluralFormsExampleFormattedLabel(){
  return '<b>Formatted message:<\/b>';
}
;
_.cwPluralFormsExampleLinkText = function cwPluralFormsExampleLinkText(){
  return 'This example interacts with the sample interface: ';
}
;
function $arg0Box_0(this$static){
  return this$static.arg0Box$u0020;
}

function $arg0Box_$eq_0(this$static, x$1){
  this$static.arg0Box$u0020 = x$1;
}

function $com$google$gwt$sample$showcase$client$content$i18n$CwPluralFormsExample$$updateMessage(this$static){
  var $e0, count;
  try {
    count = parseInt_0($trim($getText_1($arg0Box_0(this$static))));
    $setText_3($formattedMessage_0(this$static), $pluralMessages(this$static).treeCount(count));
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, Q$NumberFormatException)) {
      $e0;
    }
     else 
      throw $e0;
  }
}

function $formattedMessage_0(this$static){
  return this$static.formattedMessage$u0020;
}

function $formattedMessage_$eq_0(this$static, x$1){
  this$static.formattedMessage$u0020 = x$1;
}

function $onInitialize_5(this$static){
  var formatter, keyUpHandler, layout, link, linkPanel;
  $pluralMessages_$eq(this$static, new PluralMessages_en_0);
  layout = new FlexTable_0;
  formatter = $getFlexCellFormatter(layout);
  $setCellSpacing(layout, 5);
  link = new HTML_1(' <a href="javascript:void(0);">PluralMessages<\/a>');
  $addClickHandler_0(link, new CwPluralFormsExample$$anon$1_0(this$static));
  linkPanel = new HorizontalPanel_0;
  $setSpacing(linkPanel, 3);
  $add_11(linkPanel, new HTML_1(this$static.constants.cwPluralFormsExampleLinkText()));
  $add_11(linkPanel, link);
  $setWidget_2(layout, 0, 0, linkPanel);
  $setColSpan(formatter, 0, 0, 2);
  $arg0Box_$eq_0(this$static, new TextBox_0);
  $setText_7($arg0Box_0(this$static), '13');
  $setHTML_2(layout, 2, 0, this$static.constants.cwPluralFormsExampleArg0Label());
  $setWidget_2(layout, 2, 1, $arg0Box_0(this$static));
  $formattedMessage_$eq_0(this$static, new Label_0);
  $setHTML_2(layout, 5, 0, this$static.constants.cwPluralFormsExampleFormattedLabel());
  $setWidget_2(layout, 5, 1, $formattedMessage_0(this$static));
  $setVerticalAlignment(formatter, 5, 0, ($clinit_HasVerticalAlignment() , ALIGN_TOP));
  keyUpHandler = new CwPluralFormsExample$$anon$2_0(this$static);
  $addKeyUpHandler($arg0Box_0(this$static), keyUpHandler);
  $com$google$gwt$sample$showcase$client$content$i18n$CwPluralFormsExample$$updateMessage(this$static);
  return layout;
}

function $pluralMessages(this$static){
  return this$static.pluralMessages$u0020;
}

function $pluralMessages_$eq(this$static, x$1){
  this$static.pluralMessages$u0020 = x$1;
}

function $$init_276(){
}

function CwPluralFormsExample$$anon$1_0($outer){
  $$init_276();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

defineSeed(366, 1, makeCastMap([Q$ClickHandler, Q$EventHandler]), CwPluralFormsExample$$anon$1_0);
_.onClick = function onClick_5(event_0){
  $selectTab(this.$outer$u0020, 2);
}
;
_.$outer$u0020 = null;
function $$init_277(){
}

function CwPluralFormsExample$$anon$2_0($outer){
  $$init_277();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

defineSeed(367, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), CwPluralFormsExample$$anon$2_0);
_.onKeyUp = function onKeyUp_7(event_0){
  $com$google$gwt$sample$showcase$client$content$i18n$CwPluralFormsExample$$updateMessage(this.$outer$u0020);
}
;
_.$outer$u0020 = null;
defineSeed(368, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_6(){
  this.callback$1.onSuccess_0($onInitialize_5(this.$outer$u0020));
}
;
function $$init_281(){
}

function PluralMessages_en_0(){
  Object_1.call(this);
  $$init_281();
}

defineSeed(371, 1, {}, PluralMessages_en_0);
_.treeCount = function treeCount(arg0){
  var arg0_form, returnVal;
  returnVal = null;
  arg0_form = $select((new DefaultRule_en_0 , arg0));
  arg0_form == 1 && (returnVal = 'You have one tree.');
  if (jsNotEquals(returnVal, null)) {
    return returnVal;
  }
  return 'You have ' + arg0 + ' trees.';
}
;
var Lcom_google_gwt_sample_showcase_client_content_i18n_PluralMessages_1en_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'PluralMessages_en', 371, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwPluralFormsExample$$anon$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwPluralFormsExample$$anon$1', 366, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_i18n_CwPluralFormsExample$$anon$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.i18n.', 'CwPluralFormsExample$$anon$2', 367, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_plurals_DefaultRule_2_classLit = createForClass('com.google.gwt.i18n.client.impl.plurals.', 'DefaultRule', 200, Ljava_lang_Object_2_classLit), Lcom_google_gwt_i18n_client_impl_plurals_DefaultRule_1en_2_classLit = createForClass('com.google.gwt.i18n.client.impl.plurals.', 'DefaultRule_en', 202, Lcom_google_gwt_i18n_client_impl_plurals_DefaultRule_2_classLit);
$entry(onLoad)(31);
