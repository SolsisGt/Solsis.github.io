module.exports = function (grunt){
        grunt.initConfig({
            sass:{
                dist:{
                    files:[{
                        expand: true,
                        cwd: 'css',
                        src:['*.sass'],
                        dest: 'css',
                        ext:'.css'
                    }]
                }
            },
            watch:{
                files: ['css/*.sass'],
                tasks: ['css']
            },
            browserSync:{
                dev:{
                    bsFiles{
                        src:[
                            'css/*.css',
                            '*.html',
                            'js/*js'
                        ]
                    }
                },
            options:{
                watchTask: true,
                server:{
                    baseDir:'./'
                }
            },
            imagenin:{
                dynamic:{
                    files:[{
                        expand:true,
                        cdw:'./',
                        src: 'img/*.{png,gif,jpg,jpeg}',
                        dest: 'dist/'
                    }],
                }
            }
            }
            }
        });
        grunt.loadNomTasks('grunt-contrib-sass');
        grunt.loadNomTasks('grunt-contrib-watch');
        grunt.loadNomTasks('grunt-contrib-sync');
        grunt.registerTask('css',['sass']);
        grunt.registerTask('default',['browserSync','watch']);

}