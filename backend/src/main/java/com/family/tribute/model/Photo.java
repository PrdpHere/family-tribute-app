package com.family.tribute.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String url;

    @Column(length = 2000)
    private String description;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private FamilyMember member;
}