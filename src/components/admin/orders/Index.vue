<template>
    <div id="App" class="table-container">
        <div class="table-container-header display-flex space-between">
            <div>
                <h2>Users</h2>
            </div>
            <div class="display-flex">
                <button class="btn btn-white btn-icon btn-radius">
                    <i class="fa fa-1x fa-search" />
                </button>
                <button class="btn btn-white btn-icon btn-radius">
                    <i class="fa fa-1x fa-sort" />
                </button>
                <button class="btn btn-white btn-icon btn-radius">
                    <i class="fa fa-1x fa-plus" />
                </button>
            </div>
        </div>
        <v-table :data="users">
            <thead slot="head">
                <th class="number">No</th>
                <th :sortKey="nameLength" defaultSort="desc">Name</th>
                <th sortKey="age">Age</th>
                <th>Email</th>
                <th>Address</th>
                <th class="action"></th>
            </thead>
            <tbody slot="body" slot-scope="{displayData}">
                <tr v-for="(row, index) in displayData" :key="index">
                    <td class="number">{{ (index + 1) }}</td>
                    <td>{{ row.name }}</td>
                    <td>{{ row.age }}</td>
                    <td>{{ row.email }}</td>
                    <td>
                        {{ row.address.street }}, 
                        {{ row.address.city }} 
                        {{ row.address.state}}
                    </td>
                    <td class="display-flex space-between">
                        <button class="btn btn-hover btn-small-icon btn-radius">
                            <i class="fa fa-1x fa-ellipsis-v" />
                        </button>
                        <button class="btn btn-hover btn-small-icon btn-radius">
                            <i class="fa fa-1x fa-pencil-alt" />
                        </button>
                        <button class="btn btn-hover btn-small-icon btn-radius">
                            <i class="fa fa-1x fa-trash-alt" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            users: [
                {name: 'Massey Carlson', age: '22', email: 'Carlson@gmail.com', address: {street: 'Jl. TEST', city: 'BANDUNG', state: 'INDONESIA'}},
                {name: 'Deana Lindsay', age: '26', email: 'Lindsay@gmail.com', address: {street: 'Jl. TEST', city: 'BANDUNG', state: 'INDONESIA'}},
                {name: 'Harmon Huber', age: '23', email: 'Huber@gmail.com', address: {street: 'Jl. TEST', city: 'BANDUNG', state: 'INDONESIA'}},
                {name: 'Penny Maddox', age: '25', email: 'Maddox@gmail.com', address: {street: 'Jl. TEST', city: 'BANDUNG', state: 'INDONESIA'}},
                {name: 'Morgan Gomez', age: '28', email: 'Gomez@gmail.com', address: {street: 'Jl. TEST', city: 'BANDUNG', state: 'INDONESIA'}}
            ]
        }
    },
    methods: {
        nameLength (row) {
            return row.name.length
        },
    }
}
</script>