<template>
	<v-form>
		<v-row>
			<v-col cols="4">
				<v-row>
					<v-col cols="12">
						<v-text-field
							variant="outlined"
							label="User Name"
							v-model="userName"
						/>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-form>
</template>

<script setup>
import { ref, watch } from "vue"

const userName = ref("");
</script>