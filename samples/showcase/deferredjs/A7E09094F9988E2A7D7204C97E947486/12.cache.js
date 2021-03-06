function $createPasswordInputElement(this$static){
  return $createInputElement(($clinit_DOMImpl() , impl_0 , this$static), 'password');
}

function $setRows(this$static, rows){
  this$static.rows = rows;
}

defineSeed(267, 1, makeCastMap([Q$ScalaObject]));
_.enrichHasKeyUpHandlers = function enrichHasKeyUpHandlers(o){
  return enrichHasKeyUpHandlers_0(this, o);
}
;
_.fn2keyUpHandler = function fn2keyUpHandler(fn){
  return fn2keyUpHandler_0(fn);
}
;
function $$init_197(){
}

function KeyUpHandlers$$anon$3_0(fn$3){
  $$init_197();
  this.fn$3 = fn$3;
  Object_1.call(this);
}

defineSeed(269, 1, makeCastMap([Q$KeyUpHandler, Q$EventHandler]), KeyUpHandlers$$anon$3_0);
_.onKeyUp = function onKeyUp_0(event_0){
  this.fn$3.apply_0(event_0);
}
;
_.fn$3 = null;
function $$init_198(){
}

function $com$google$gwt$sample$showcase$client$KeyUpHandlers$RichHasKeyUpHandlers$$$outer(this$static){
  return this$static.$outer$u0020;
}

function $onKeyUp(this$static, fn){
  return this$static.o.addKeyUpHandler($com$google$gwt$sample$showcase$client$KeyUpHandlers$RichHasKeyUpHandlers$$$outer(this$static).fn2keyUpHandler(fn));
}

function KeyUpHandlers$RichHasKeyUpHandlers_0($outer, o){
  $$init_198();
  this.o = o;
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  Object_1.call(this);
}

defineSeed(270, 1, makeCastMap([Q$ScalaObject]), KeyUpHandlers$RichHasKeyUpHandlers_0);
_.$outer$u0020 = null;
_.o = null;
function enrichHasKeyUpHandlers_0($this, o){
  return new KeyUpHandlers$RichHasKeyUpHandlers_0($this, o);
}

function fn2keyUpHandler_0(fn$3){
  return new KeyUpHandlers$$anon$3_0(fn$3);
}

defineSeed(309, 1, makeCastMap([Q$ShowcaseConstants]));
_.cwBasicTextAreaLabel = function cwBasicTextAreaLabel(){
  return '<b>Text area:<\/b>';
}
;
_.cwBasicTextNormalLabel = function cwBasicTextNormalLabel(){
  return '<b>Normal text box:<\/b>';
}
;
_.cwBasicTextPasswordLabel = function cwBasicTextPasswordLabel(){
  return '<b>Password text box:<\/b>';
}
;
_.cwBasicTextReadOnly = function cwBasicTextReadOnly(){
  return 'read only';
}
;
_.cwBasicTextSelected = function cwBasicTextSelected(){
  return 'Selected';
}
;
function $com$google$gwt$sample$showcase$client$content$text$CwBasicText$$updateSelectionLabel(this$static, textBox, label){
  $setText_4(label, this$static.constants.cwBasicTextSelected() + ': ' + boxToInteger(textBox.getCursorPos()) + ', ' + boxToInteger(textBox.getSelectionLength()));
}

function $createTextExample(this$static, textBox$1, addSelection){
  var hPanel, label$1;
  hPanel = new HorizontalPanel_0;
  $setSpacing(hPanel, 4);
  $add_11(hPanel, textBox$1);
  if (addSelection) {
    label$1 = new Label_2(this$static.constants.cwBasicTextSelected() + ': 0, 0');
    $onKeyUp(($clinit_Handlers$() , MODULE$_3).enrichHasKeyUpHandlers(textBox$1), new CwBasicText$$anonfun$createTextExample$1_0(this$static, textBox$1, label$1));
    $onClick(($clinit_Handlers$() , MODULE$_3).enrichHasClickHandlers(textBox$1), new CwBasicText$$anonfun$createTextExample$2_0(this$static, textBox$1, label$1));
    $add_11(hPanel, label$1);
  }
  return hPanel;
}

function $onInitialize_27(this$static){
  var disabledPassword, disabledText, normalPassword, normalText, textArea, vpanel;
  vpanel = new VerticalPanel_0;
  $setSpacing(vpanel, 5);
  normalText = new TextBox_0;
  $ensureDebugId(normalText, 'cwBasicText-textbox');
  disabledText = new TextBox_0;
  $ensureDebugId(disabledText, 'cwBasicText-textbox-disabled');
  $setText_8(disabledText, this$static.constants.cwBasicTextReadOnly());
  disabledText.setEnabled(false);
  $add_16(vpanel, new HTML_1(this$static.constants.cwBasicTextNormalLabel()));
  $add_16(vpanel, $createTextExample(this$static, normalText, true));
  $add_16(vpanel, $createTextExample(this$static, disabledText, false));
  normalPassword = new PasswordTextBox_0;
  $ensureDebugId(normalPassword, 'cwBasicText-password');
  disabledPassword = new PasswordTextBox_0;
  $ensureDebugId(disabledPassword, 'cwBasicText-password-disabled');
  $setText_8(disabledPassword, this$static.constants.cwBasicTextReadOnly());
  disabledPassword.setEnabled(false);
  $add_16(vpanel, new HTML_1('<br><br>' + this$static.constants.cwBasicTextPasswordLabel()));
  $add_16(vpanel, $createTextExample(this$static, normalPassword, true));
  $add_16(vpanel, $createTextExample(this$static, disabledPassword, false));
  textArea = new TextArea_1;
  $ensureDebugId(textArea, 'cwBasicText-textarea');
  $setVisibleLines(textArea, 5);
  $add_16(vpanel, new HTML_1('<br><br>' + this$static.constants.cwBasicTextAreaLabel()));
  $add_16(vpanel, $createTextExample(this$static, textArea, true));
  return vpanel;
}

defineSeed(486, 1, makeCastMap([Q$RunAsyncCallback]));
_.onSuccess = function onSuccess_28(){
  this.callback$1.onSuccess_0($onInitialize_27(this.$outer$u0020));
}
;
function $$init_385(){
}

function $apply_66(this$static){
  $com$google$gwt$sample$showcase$client$content$text$CwBasicText$$updateSelectionLabel(this$static.$outer$u0020, this$static.textBox$1, this$static.label$1);
}

function CwBasicText$$anonfun$createTextExample$1_0($outer, textBox$1, label$1){
  $$init_385();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.textBox$1 = textBox$1;
  this.label$1 = label$1;
  AbstractFunction1_0.call(this);
}

defineSeed(487, 266, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwBasicText$$anonfun$createTextExample$1_0);
_.apply_0 = function apply_78(v1){
  $apply_66(this, dynamicCast(v1, Q$KeyUpEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
_.label$1 = null;
_.textBox$1 = null;
function $$init_386(){
}

function $apply_67(this$static){
  $com$google$gwt$sample$showcase$client$content$text$CwBasicText$$updateSelectionLabel(this$static.$outer$u0020, this$static.textBox$1, this$static.label$1);
}

function CwBasicText$$anonfun$createTextExample$2_0($outer, textBox$1, label$1){
  $$init_386();
  if (isNull($outer)) {
    throw new NullPointerException_0;
  }
   else {
    this.$outer$u0020 = $outer;
  }
  this.textBox$1 = textBox$1;
  this.label$1 = label$1;
  AbstractFunction1_0.call(this);
}

defineSeed(488, 266, makeCastMap([Q$Serializable, Q$Function1, Q$ScalaObject, Q$Serializable_0]), CwBasicText$$anonfun$createTextExample$2_0);
_.apply_0 = function apply_79(v1){
  $apply_67(this, dynamicCast(v1, Q$ClickEvent));
  return $clinit_BoxedUnit() , UNIT;
}
;
_.$outer$u0020 = null;
_.label$1 = null;
_.textBox$1 = null;
function $getImpl(){
  return impl_11;
}

defineSeed(688, 304, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]));
_.getCursorPos = function getCursorPos(){
  return impl_11.getCursorPos_0($getElement(this));
}
;
_.getSelectionLength = function getSelectionLength(){
  return impl_11.getSelectionLength_0($getElement(this));
}
;
function $$init_548(){
}

function PasswordTextBox_0(){
  $clinit_TextBoxBase();
  TextBox_1.call(this, $createPasswordInputElement(get_1()), 'gwt-PasswordTextBox');
  $$init_548();
}

defineSeed(685, 686, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), PasswordTextBox_0);
function $$init_585(){
}

function $getTextAreaElement(this$static){
  return $cast($getElement(this$static));
}

function $setVisibleLines(this$static, lines){
  $setRows($getTextAreaElement(this$static), lines);
}

function TextArea_1(){
  $clinit_TextBoxBase();
  TextBoxBase_0.call(this, $createTextAreaElement(get_1()));
  $$init_585();
  this.setStyleName('gwt-TextArea');
}

defineSeed(727, 687, makeCastMap([Q$HasAttachHandlers, Q$HasHandlers, Q$EventListener, Q$Focusable, Q$HasFocus, Q$HasVisibility, Q$IsWidget, Q$UIObject, Q$Widget]), TextArea_1);
_.getCursorPos = function getCursorPos_0(){
  return $getImpl().getTextAreaCursorPos($getElement(this));
}
;
_.getSelectionLength = function getSelectionLength_0(){
  return $getImpl().getTextAreaSelectionLength($getElement(this));
}
;
defineSeed(771, 1, {});
_.getCursorPos_0 = function getCursorPos_1(elem){
  try {
    return elem.selectionStart;
  }
   catch (e) {
    return 0;
  }
}
;
_.getSelectionLength_0 = function getSelectionLength_1(elem){
  try {
    return elem.selectionEnd - elem.selectionStart;
  }
   catch (e) {
    return 0;
  }
}
;
_.getTextAreaCursorPos = function getTextAreaCursorPos(elem){
  return this.getCursorPos_0(elem);
}
;
_.getTextAreaSelectionLength = function getTextAreaSelectionLength(elem){
  return this.getSelectionLength_0(elem);
}
;
defineSeed(772, 771, {});
_.getCursorPos_0 = function getCursorPos_2(elem){
  try {
    var tr = elem.document.selection.createRange();
    if (tr.parentElement() !== elem)
      return -1;
    return -tr.move('character', -65535);
  }
   catch (e) {
    return 0;
  }
}
;
_.getSelectionLength_0 = function getSelectionLength_2(elem){
  try {
    var tr = elem.document.selection.createRange();
    if (tr.parentElement() !== elem)
      return 0;
    return tr.text.length;
  }
   catch (e) {
    return 0;
  }
}
;
_.getTextAreaCursorPos = function getTextAreaCursorPos_0(elem){
  try {
    var tr = elem.document.selection.createRange();
    if (tr.parentElement() !== elem)
      return -1;
    var tr2 = tr.duplicate();
    tr2.moveToElementText(elem);
    tr2.setEndPoint('EndToStart', tr);
    var tr2Length = tr2.text.length;
    var offset = 0;
    var tr3 = tr2.duplicate();
    tr3.moveEnd('character', -1);
    var tr3Length = tr3.text.length;
    while (tr3Length == tr2Length && tr3.parentElement() == elem) {
      offset += 2;
      tr3.moveEnd('character', -1);
      tr3Length = tr3.text.length;
    }
    return tr2Length + offset;
  }
   catch (e) {
    return 0;
  }
}
;
_.getTextAreaSelectionLength = function getTextAreaSelectionLength_0(elem){
  try {
    var tr = elem.document.selection.createRange();
    if (tr.parentElement() !== elem)
      return 0;
    var trLength = tr.text.length;
    var offset = 0;
    var tr2 = tr.duplicate();
    tr2.moveEnd('character', -1);
    var tr2Length = tr2.text.length;
    while (tr2Length == trLength && (tr2.parentElement() == elem && tr.compareEndPoints('StartToEnd', tr2) <= 0)) {
      offset += 2;
      tr2.moveEnd('character', -1);
      tr2Length = tr2.text.length;
    }
    return trLength + offset;
  }
   catch (e) {
    return 0;
  }
}
;
var Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PasswordTextBox', 685, Lcom_google_gwt_user_client_ui_TextBox_2_classLit), Lcom_google_gwt_user_client_ui_TextArea_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TextArea', 727, Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit), Lcom_google_gwt_sample_showcase_client_KeyUpHandlers$RichHasKeyUpHandlers_2_classLit = createForClass('com.google.gwt.sample.showcase.client.', 'KeyUpHandlers$RichHasKeyUpHandlers', 270, Ljava_lang_Object_2_classLit), Lcom_google_gwt_sample_showcase_client_content_text_CwBasicText$$anonfun$createTextExample$1_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.text.', 'CwBasicText$$anonfun$createTextExample$1', 487, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_content_text_CwBasicText$$anonfun$createTextExample$2_2_classLit = createForClass('com.google.gwt.sample.showcase.client.content.text.', 'CwBasicText$$anonfun$createTextExample$2', 488, Lscala_runtime_AbstractFunction1_2_classLit), Lcom_google_gwt_sample_showcase_client_KeyUpHandlers$$anon$3_2_classLit = createForClass('com.google.gwt.sample.showcase.client.', 'KeyUpHandlers$$anon$3', 269, Ljava_lang_Object_2_classLit);
$entry(onLoad)(12);
