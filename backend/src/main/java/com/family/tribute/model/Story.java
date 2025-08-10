package com.family.tribute.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(length = 8000)
    private String content;

    private Instant dateCreated = Instant.now();

    @ManyToOne
    @JoinColumn(name = "member_id")
    private FamilyMember member;
}