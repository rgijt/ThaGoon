<script>
import useVuelidate from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';

export default {
  name: 'GameSettings',
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      GameSettings: {
        Timer: 5,
        UseTimer: false,
        UseRecording: false,
        Metronome: 80,
        UseMetronome: false,
      },
    };
  },
  validations() {
    return {
      GameSettings: {
        Timer: {},
      },
    };
  },
};
</script>
