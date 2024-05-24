<script setup lang="ts">
import { siteConfig } from "@/config/siteConfig";
</script><template>
    <div>
        <footer class="text-center p-4 text-sm text-gray-500">
            <p>
                <a href="https://beian.miit.gov.cn/" target="_blank">
                    {{ siteConfig.footer.record_number }}
                </a>
            </p>
            <p>
                © {{ new Date().getFullYear() }}
                <a :href="siteConfig.footer.introduction.github" target="_blank"> {{ siteConfig.footer.introduction.name
                    }}</a>. All
                Rights Reserved.
            </p>
        </footer>
    </div>
</template>