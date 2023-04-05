<template>
    <div class="mb-1 col-12 text-left">
      <label
        v-if="label"
        :for="id"
        class="form-label text-left"
        :class="{
          'fs-7': small,
          'font-column': fontcolumn,
          'font-label': fontlabel,
          'font-label-popup': fontlabelpopup,
        }"
      >
        {{ label }}
      </label>
      <select
        v-if="type === 'select'"
        :id="id"
        class="form-select"
        :class="{
          'is-invalid': help || isError,
          'form-select-sm': small,
          'font-detail': fontdetail,
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        @blur="Validate"
        :disabled="isDisabled"
      >
        <option
          v-for="(item, index) in optionlist"
          :value="item.value"
          :key="'status' + index"
        >
          {{ item.text }}
        </option>
      </select>
      <Datepicker
        v-else-if="type === 'date' || type === 'datetime'"
        :id="id"
        v-model="datetime"
        :class="{ 'is-invalid': help || isError, 'dp__input-sm': small }"
        :autoApply="true"
        :textInput="true"
        :enableTimePicker="type === 'datetime'"
        :enableSeconds="type === 'datetime'"
        :placeholder="placeholder"
        @blur="Validate"
        :disabled="isDisabled"
        :format="dateformat"
        :minDate="mindate"
        :maxDate="maxdate"
        :clearable="clearable"
        :state="isError ? false : null"
        :inputClassName="fontdetail ? 'font-detail-im' : ''"
        :menuClassName="fontdetail ? 'font-detail-im' : ''"
        :calendarClassName="fontdetail ? 'font-detail-im' : ''"
      />
      <timepicker
        v-else-if="type === 'time'"
        :id="id"
        class="popup"
        :class="{
          'is-invalid': help || isError,
          'time-small': small,
          'font-detail': fontdetail,
        }"
        :value="datetime"
        :format="
          timeUseMillisec
            ? 'HH:mm:ss.SSS'
            : timeUseSec
            ? 'HH:mm:ss'
            : timeUseMin
            ? 'HH:mm'
            : 'HH:00'
        "
        :size="small ? 'small' : null"
        @blur="Validate"
        :format-placeholder="{
          hour: '--',
          minute: '--',
          second: '--',
          millisecond: '---',
        }"
        @change="timeChange"
        :disabled="isDisabled"
      />
      <input
        v-else-if="type === 'id'"
        :id="id"
        class="form-control"
        :class="{
          'is-invalid': help || isError,
          'form-control-sm': small,
          'font-detail': fontdetail,
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="text"
        :placeholder="placeholder"
        @blur="Validate"
        :disabled="isDisabled"
        @keypress="isNumber($event)"
        :maxlength="idLength ? idLength : 8"
      />
      <input
        v-else-if="type === 'number' && typeNumberInteger"
        :id="id"
        type="number"
        class="form-control"
        :class="{
          'is-invalid': help || isError,
          'form-control-sm': small,
          'font-detail': fontdetail,
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        @blur="Validate"
        :disabled="isDisabled"
        :step="typeNumberInteger ? 1 : step"
        :pattern="typeNumberInteger ? '\d+' : undefined"
        @keypress="isNumber($event)"
      />
      <input
        v-else-if="type === 'text' && typePositiveNumber"
        :id="id"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': help || isError,
          'form-control-sm': small,
          'font-detail': fontdetail,
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        @blur="Validate"
        :disabled="isDisabled"
        @keypress="isPositiveNumber($event)"
      />
      <input
        v-else-if="type === 'number'"
        :id="id"
        type="number"
        class="form-control"
        :class="{
          'is-invalid': help || isError,
          'form-control-sm': small,
          'font-detail': fontdetail,
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        @blur="Validate"
        :disabled="isDisabled"
        :step="step"
      />
      <input
        v-else-if="type === 'formatnumber'"
        :id="id"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': help || isError,
          'form-control-sm': small,
          'font-detail': fontdetail,
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        @blur="Validate"
        :disabled="isDisabled"
        :step="step"
      />
      <input
        v-else-if="type === 'mobile'"
        v-model="mobile"
        :id="id"
        type="text"
        class="form-control"
        :class="{
          'is-invalid': help || isError,
          'form-control-sm': small,
          'font-detail': fontdetail,
        }"
        @input="acceptNumber"
        :placeholder="placeholder"
        @blur="Validate"
        :disabled="isDisabled"
      />
      <input
        v-else-if="type === 'timex'"
        :id="id"
        class="form-control"
        :class="{
          'is-invalid': help || isError,
          'form-control-sm': small,
          'font-detail': fontdetail,
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="time"
        :placeholder="placeholder"
        @blur="Validate"
        :disabled="isDisabled"
        :step="step"
      />
      <div class="input-group" v-else-if="type === 'password'">
        <input
          :id="id"
          class="form-control"
          :class="{
            'is-invalid': help || isError,
            'form-control-sm': small,
            'font-detail': fontdetail,
          }"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          :type="passwordtype"
          :placeholder="placeholder"
          @blur="Validate"
          :disabled="isDisabled"
          :step="step"
          ref="password"
        />
        <span class="input-group-text" @click.prevent="toggleEye">
          <font-awesome-icon
            :icon="passwordEye"
            style="min-width: 20px; cursor: pointer"
          />
        </span>
      </div>
      <input
        v-else
        :id="id"
        class="form-control"
        :class="{
          'is-invalid': help || isError,
          'form-control-sm': small,
          'font-detail': fontdetail,
          'text-end': Right,
        }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        :placeholder="placeholder"
        @blur="Validate"
        :disabled="isDisabled"
        :step="step"
        :maxlength="idLength"
      />
      <span v-if="help" class="invalid-feedback font-small">{{ help }}</span>
    </div>
  </template>
  
  <script>
  import Datepicker from '@vuepic/vue-datepicker';
  import { displaydateformat } from '../utilities/data.util.js';
  import { TimePicker } from '@progress/kendo-vue-dateinputs';
  export default {
    emits: ['update:modelValue'],
    props: {
      label: String,
      placeholder: String,
      id: String,
      help: String,
      isError: Boolean,
      modelValue: [String, Date],
      type: String,
      Validate: Function,
      isDisabled: Boolean,
      idLength: Number,
      step: Number,
      optionlist: Array,
      small: Boolean,
      fontcolumn: Boolean,
      fontdetail: Boolean,
      fontlabel: Boolean,
      fontlabelpopup: Boolean,
      pattern: String,
      mindate: Date,
      maxdate: Date,
      typeNumberInteger: Boolean,
      clearable: { type: Boolean, default: true },
      timeUseSec: { type: Boolean, default: true },
      timeUseMillisec: { type: Boolean, default: false },
      timeUseMin: { type: Boolean, default: true },
      Right: Boolean,
      typePositiveNumber: Boolean,
    },
    data() {
      return {
        datetime: '',
        mobile: '',
        passwordtype: 'password',
        passwordEye: 'eye-slash',
      };
    },
    mounted() {
      if (this.datetime != this.modelValue) {
        this.datetime = this.modelValue;
        if (this.type === 'time' && this.modelValue) {
          if (!(this.modelValue instanceof Date))
            this.datetime = new Date(this.modelValue);
          else this.datetime = this.modelValue;
        }
      }
    },
    methods: {
      dateformat(date) {
        return displaydateformat(date);
      },
      isNumber: function (evt) {
        evt = evt ? evt : window.event;
        var charCode = evt.which ? evt.which : evt.keyCode;
        if (charCode == 13) {
          this.Validate({ type: 'enter' });
        } else if ((charCode < 48 || charCode > 57) && charCode != 13) {
          evt.preventDefault();
        } else {
          return true;
        }
      },
      acceptNumber() {
        var mobileformat = this.mobile
          .replace(/\D/g, '')
          .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        if (!mobileformat[2]) this.mobile = mobileformat[1];
        else {
          this.mobile =
            mobileformat[1] +
            '-' +
            mobileformat[2] +
            (mobileformat[3] ? '-' + mobileformat[3] : '');
        }
      },
      timeChange(event) {
        this.datetime = event.target.value;
      },
      toggleEye() {
        if (this.isDisabled) return;
        this.passwordtype =
          this.passwordtype === 'password' ? 'text' : 'password';
  
        this.passwordEye = this.passwordtype === 'password' ? 'eye-slash' : 'eye';
        document.activeElement.blur();
      },
      isPositiveNumber: function (e) {
        let regex = /[0-9]{1}|[.,]{1}/;
        const char = e.key;
        if (!regex.test(char)) {
          if (isNaN(e.key)) {
            e.preventDefault();
          }
          return true;
        }
      },
    },
    components: {
      Datepicker,
      timepicker: TimePicker,
    },
    watch: {
      datetime() {
        this.$emit('update:modelValue', this.datetime);
      },
      mobile() {
        this.$emit('update:modelValue', this.mobile);
      },
    },
  };
  </script>
  
  <style>
  .time-small {
    height: 31px;
    font-size: 14px;
  }
  button.k-rounded-md {
    border-radius: 0px;
  }
  .k-animation-container {
    z-index: 10003;
  }
  .font-detail-im {
    font-family: Prompt Regular, sans-serif !important;
    font-size: 14px !important;
  }
  .k-timeselector,
  .k-button {
    font-family: Prompt Regular, sans-serif !important;
  }
  </style>
  