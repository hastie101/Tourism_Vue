<script setup>
import NavAndHero from '../components/NavAndHero.vue';
import about from './about.vue';
import booking from './booking.vue';
import contact from './contact.vue';
import destination from './destination.vue';
import packages from './package.vue';
import service from './service.vue';
import team from './team.vue';
import testimonial from './testimonial.vue';
// import 404 from './404.vue';
 
</script>

 <template>
    <NavAndHero/>
    <about/>
    <booking/>
    <contact/>
    <destination/>
    <packages/>
    <service/>
    <team/>
    <testimonial/>

     <!-- Back to Top -->
     <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</template>
