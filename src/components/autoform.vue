<template>
    <div>
        <b-form class="border p-3" :action="JSON.parse(json).url" :method="JSON.parse(json).method">
            <h3>{{JSON.parse(this.json).title}}</h3>
            <hr class="mb-3" />
            <b-form-group
                class="shadow-sm p-3"
                v-for="(x,i) in JSON.parse(json).data"
                :key="i"
                :label="x.name"
                :label-for="x.name"
                :description="x.description"
            >
                <div v-if="x.type=='check'">
                    <b-form-checkbox-group :id="x.name">
                        <b-form-checkbox v-for="(item,j) in x.items" :key="j" :value="j">{{item}}</b-form-checkbox>
                    </b-form-checkbox-group>
                </div>

                <div v-if="x.type=='radio'">
                    <b-form-radio-group :id="x.name">
                        <b-form-radio v-for="(item,j) in x.items" :key="j" :value="item">{{item}}</b-form-radio>
                    </b-form-radio-group>
                </div>

                <b-form-textarea
                    v-if="x.type=='textarea'"
                    :name="x.name"
                    :placeholder="x.name"
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>

                <b-form-input v-if="x.type=='text'" :type="x.type" :name="x.name" :value="x.value"></b-form-input>
                <b-form-input v-if="x.type=='time'" :type="x.type" :name="x.name" :value="x.value"></b-form-input>
                <b-form-input
                    v-if="x.type=='password'"
                    :type="x.type"
                    :name="x.name"
                    :value="x.value"
                ></b-form-input>
                <b-form-input v-if="x.type=='color'" :type="x.type" :name="x.name" :value="x.value"></b-form-input>
                <b-form-input v-if="x.type=='email'" :type="x.type" :name="x.name" :value="x.value"></b-form-input>
                <b-form-input
                    v-if="x.type=='number'"
                    :type="x.type"
                    :name="x.name"
                    :value="x.value"
                ></b-form-input>
                <b-form-input
                    v-if="x.type=='search'"
                    :type="x.type"
                    :name="x.name"
                    :value="x.value"
                ></b-form-input>
                <b-form-input v-if="x.type=='url'" :type="x.type" :name="x.name" :value="x.value"></b-form-input>
                <b-form-input v-if="x.type=='tel'" :type="x.type" :name="x.name" :value="x.value"></b-form-input>
                <b-form-input
                    v-if="x.type=='range'"
                    :type="x.type"
                    :name="x.name"
                    :min="x.min"
                    :max="x.max"
                    :step="x.step"
                ></b-form-input>

                <b-form-datepicker v-if="x.type=='datepicker'" :name="x.name"></b-form-datepicker>

                <b-form-file v-if="x.type=='file'" :name="x.name" plain></b-form-file>

                <b-form-rating v-if="x.type=='rate'" :name="x.name"></b-form-rating>

                <b-form-select
                    v-if="x.type=='select'"
                    :name="x.name"
                    :options="x.items"
                    :value="x.value"
                ></b-form-select>

                <b-form-spinbutton
                    v-if="x.type=='spinbutton'"
                    :name="x.name"
                    :min="x.min"
                    :max="x.max"
                    :step="x.step"
                ></b-form-spinbutton>

                <b-form-tags v-if="x.type=='tags'" :name="x.name" :input-id="x.name"></b-form-tags>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    props: ["json"],
    data: function() {
        return {};
    },
    methods: {},
    computed: {}
};
</script>
<style>
</style>
